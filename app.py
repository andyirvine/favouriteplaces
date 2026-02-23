import os
import json
from functools import wraps
from datetime import datetime

from flask import (
    Flask, render_template, redirect, url_for,
    session, request, jsonify, flash
)
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from authlib.integrations.flask_client import OAuth
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'dev-secret-change-in-production')

# Render provides postgres:// but SQLAlchemy requires postgresql://
_db_url = os.getenv('DATABASE_URL', 'sqlite:///favplace.db')
if _db_url.startswith('postgres://'):
    _db_url = _db_url.replace('postgres://', 'postgresql://', 1)
app.config['SQLALCHEMY_DATABASE_URI'] = _db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['SESSION_COOKIE_SECURE'] = os.getenv('FLASK_ENV') == 'production'

db = SQLAlchemy(app)
csrf = CSRFProtect(app)
oauth = OAuth(app)

google = oauth.register(
    name='google',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)


# ── Models ─────────────────────────────────────────────────────────────────────

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    picture = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    places = db.relationship('Place', backref='author', lazy=True)


class Place(db.Model):
    __tablename__ = 'places'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    author_name = db.Column(db.String(200), nullable=False)
    place_name = db.Column(db.String(300), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    feeling = db.Column(db.String(300))
    flora = db.Column(db.JSON, nullable=False, default=list)
    fauna = db.Column(db.JSON, nullable=False, default=list)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'author_name': self.author_name,
            'place_name': self.place_name,
            'country': self.country,
            'description': self.description,
            'feeling': self.feeling or '',
            'flora': self.flora or [],
            'fauna': self.fauna or [],
            'latitude': self.latitude,
            'longitude': self.longitude,
            'created_at': self.created_at.isoformat() if self.created_at else '',
        }


# ── Auth helpers ───────────────────────────────────────────────────────────────

def get_current_user():
    user_id = session.get('user_id')
    if user_id:
        return db.session.get(User, user_id)
    return None


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not get_current_user():
            session.clear()
            flash('Please sign in to continue.', 'info')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated


@app.context_processor
def inject_globals():
    return {'current_user': get_current_user()}


# ── Routes ─────────────────────────────────────────────────────────────────────

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/map')
def map_page():
    return render_template('map_page.html')


@app.route('/submit', methods=['GET', 'POST'])
@login_required
def submit():
    user = get_current_user()

    if request.method == 'POST':
        # Validate coordinates
        try:
            lat = float(request.form['latitude'])
            lng = float(request.form['longitude'])
        except (KeyError, ValueError):
            flash('Please select a location on the map.', 'error')
            return render_template('submit.html', user=user)

        if not (-90 <= lat <= 90 and -180 <= lng <= 180):
            flash('Invalid coordinates. Please select a valid location on the map.', 'error')
            return render_template('submit.html', user=user)

        author_name = request.form.get('author_name', '').strip() or user.name
        place_name = request.form.get('place_name', '').strip()
        country = request.form.get('country', '').strip()
        description = request.form.get('description', '').strip()
        feeling = request.form.get('feeling', '').strip()

        if not all([place_name, country, description]):
            flash('Please fill in all required fields.', 'error')
            return render_template('submit.html', user=user)

        flora_raw = request.form.get('flora', '')
        fauna_raw = request.form.get('fauna', '')
        flora_list = [f.strip() for f in flora_raw.split(',') if f.strip()][:10]
        fauna_list = [f.strip() for f in fauna_raw.split(',') if f.strip()][:10]

        place = Place(
            user_id=user.id,
            author_name=author_name[:200],
            place_name=place_name[:300],
            country=country[:100],
            description=description[:5000],
            feeling=feeling[:300],
            flora=flora_list,
            fauna=fauna_list,
            latitude=lat,
            longitude=lng,
        )
        db.session.add(place)
        db.session.commit()

        flash('Your favourite place has been shared!', 'success')
        return redirect(url_for('home'))

    return render_template('submit.html', user=user)


@app.route('/account')
@login_required
def account():
    user = get_current_user()
    places = Place.query.filter_by(user_id=user.id).order_by(Place.created_at.desc()).all()
    return render_template('account.html', user=user, places=places)


@app.route('/place/<int:place_id>/edit', methods=['GET', 'POST'])
@login_required
def edit_place(place_id):
    user = get_current_user()
    place = db.get_or_404(Place, place_id)

    if place.user_id != user.id:
        flash('You can only edit your own places.', 'error')
        return redirect(url_for('account'))

    if request.method == 'POST':
        try:
            lat = float(request.form['latitude'])
            lng = float(request.form['longitude'])
        except (KeyError, ValueError):
            flash('Please select a location on the map.', 'error')
            return render_template('edit.html', user=user, place=place)

        if not (-90 <= lat <= 90 and -180 <= lng <= 180):
            flash('Invalid coordinates. Please select a valid location.', 'error')
            return render_template('edit.html', user=user, place=place)

        author_name = request.form.get('author_name', '').strip() or user.name
        place_name  = request.form.get('place_name', '').strip()
        country     = request.form.get('country', '').strip()
        description = request.form.get('description', '').strip()
        feeling     = request.form.get('feeling', '').strip()

        if not all([place_name, country, description]):
            flash('Please fill in all required fields.', 'error')
            return render_template('edit.html', user=user, place=place)

        flora_raw = request.form.get('flora', '')
        fauna_raw = request.form.get('fauna', '')

        place.author_name = author_name[:200]
        place.place_name  = place_name[:300]
        place.country     = country[:100]
        place.description = description[:5000]
        place.feeling     = feeling[:300]
        place.flora       = [f.strip() for f in flora_raw.split(',') if f.strip()][:10]
        place.fauna       = [f.strip() for f in fauna_raw.split(',') if f.strip()][:10]
        place.latitude    = lat
        place.longitude   = lng

        db.session.commit()
        flash(f'"{place.place_name}" has been updated.', 'success')
        return redirect(url_for('account'))

    return render_template('edit.html', user=user, place=place)


@app.route('/place/<int:place_id>/delete', methods=['POST'])
@login_required
def delete_place(place_id):
    user = get_current_user()
    place = db.get_or_404(Place, place_id)

    if place.user_id != user.id:
        flash('You can only delete your own places.', 'error')
        return redirect(url_for('account'))

    name = place.place_name
    db.session.delete(place)
    db.session.commit()
    flash(f'"{name}" has been deleted.', 'info')
    return redirect(url_for('account'))


@app.route('/api/places')
@csrf.exempt
def api_places():
    places = Place.query.order_by(Place.created_at.desc()).all()
    response = jsonify([p.to_dict() for p in places])
    response.headers['Cache-Control'] = 'no-cache'
    return response


# ── OAuth routes ───────────────────────────────────────────────────────────────

@app.route('/login')
def login():
    redirect_uri = url_for('oauth_callback', _external=True)
    return google.authorize_redirect(redirect_uri)


@app.route('/oauth/callback')
def oauth_callback():
    try:
        token = google.authorize_access_token()
        userinfo = token.get('userinfo')
    except Exception:
        flash('Sign-in failed. Please try again.', 'error')
        return redirect(url_for('home'))

    if not userinfo:
        flash('Could not retrieve account information.', 'error')
        return redirect(url_for('home'))

    google_id = userinfo.get('sub')
    user = User.query.filter_by(google_id=google_id).first()

    if not user:
        user = User(
            google_id=google_id,
            name=userinfo.get('name', ''),
            email=userinfo.get('email', ''),
            picture=userinfo.get('picture', ''),
        )
        db.session.add(user)
    else:
        user.name = userinfo.get('name', user.name)
        user.picture = userinfo.get('picture', user.picture)

    db.session.commit()
    session['user_id'] = user.id
    flash(f'Welcome, {user.name}!', 'success')
    return redirect(url_for('home'))


@app.route('/logout')
def logout():
    session.clear()
    flash('You have been signed out.', 'info')
    return redirect(url_for('home'))


# ── Startup ────────────────────────────────────────────────────────────────────

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
