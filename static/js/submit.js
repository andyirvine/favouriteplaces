// ── Submit page: location picker map ──────────────────────────────────────────

const latInput     = document.getElementById('latitude');
const lngInput     = document.getElementById('longitude');
const locationHint = document.getElementById('location-hint');
const locationMap  = document.getElementById('location-map');
const countryInput = document.getElementById('country');
const form         = document.getElementById('submit-form');

// Initialise Leaflet map
const map = L.map('location-map', {
  center: [20, 10],
  zoom: 2,
  minZoom: 1,
  maxZoom: 18,
  worldCopyJump: true,
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
}).addTo(map);

// Custom pin icon
const pinIcon = L.divIcon({
  className: '',
  html: `<svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 24 14 24S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#2d6a4f"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
});

let marker = null;

// ── Click to place / move pin ──────────────────────────────────────────────────

map.on('click', function (e) {
  const { lat, lng } = e.latlng;
  placePin(lat, lng);
  reverseGeocode(lat, lng);
});

function placePin(lat, lng) {
  const roundedLat = Math.round(lat * 1e6) / 1e6;
  const roundedLng = Math.round(lng * 1e6) / 1e6;

  latInput.value = roundedLat;
  lngInput.value = roundedLng;

  if (marker) {
    marker.setLatLng([lat, lng]);
  } else {
    marker = L.marker([lat, lng], { icon: pinIcon, draggable: true }).addTo(map);

    marker.on('dragend', function () {
      const pos = marker.getLatLng();
      placePin(pos.lat, pos.lng);
      reverseGeocode(pos.lat, pos.lng);
    });
  }

  locationMap.classList.add('has-pin');
  locationHint.classList.add('has-pin');
  locationHint.textContent = `Pin placed at ${roundedLat.toFixed(4)}° N, ${roundedLng.toFixed(4)}° E. Drag to adjust.`;
}

// ── Reverse geocode to fill country field ──────────────────────────────────────

let geocodeTimer = null;

function reverseGeocode(lat, lng) {
  clearTimeout(geocodeTimer);
  geocodeTimer = setTimeout(async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'OurFavouritePlaces/1.0' },
      });
      const data = await res.json();
      const country = data?.address?.country;
      if (country && !countryInput.value.trim()) {
        countryInput.value = country;
      }
    } catch {
      // Silently fail — country field remains editable
    }
  }, 400);
}

// ── Geolocation offer ──────────────────────────────────────────────────────────

if (navigator.geolocation) {
  const geoBtn = document.createElement('button');
  geoBtn.type = 'button';
  geoBtn.textContent = 'Use my location';
  geoBtn.className = 'btn-secondary';
  geoBtn.style.cssText = 'margin-top:0.5rem;font-size:0.82rem;padding:0.35rem 0.8rem;';
  locationHint.after(geoBtn);

  geoBtn.addEventListener('click', () => {
    geoBtn.textContent = 'Finding…';
    geoBtn.disabled = true;
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        map.setView([latitude, longitude], 8);
        placePin(latitude, longitude);
        reverseGeocode(latitude, longitude);
        geoBtn.remove();
      },
      () => {
        geoBtn.textContent = 'Could not get location';
        setTimeout(() => {
          geoBtn.textContent = 'Use my location';
          geoBtn.disabled = false;
        }, 2000);
      }
    );
  });
}

// ── Form validation ────────────────────────────────────────────────────────────

form.addEventListener('submit', function (e) {
  if (!latInput.value || !lngInput.value) {
    e.preventDefault();
    locationHint.classList.add('has-pin');
    locationHint.style.color = '#dc2626';
    locationHint.textContent = 'Please click the map to select a location for your place.';
    locationMap.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sharing…';
});
