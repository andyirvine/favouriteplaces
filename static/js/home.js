// ── Home page: fetch places, filter, render cards ──────────────────────────────

function csrfToken() {
  return document.querySelector('meta[name="csrf-token"]')?.content || '';
}

function heartIcon(filled) {
  return filled
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="#e05a7a" stroke="#e05a7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
}

async function toggleFavourite(placeId, btn) {
  if (!window.isLoggedIn) {
    window.location.href = '/login';
    return;
  }
  const wasFaved = btn.dataset.faved === 'true';
  btn.dataset.faved = !wasFaved;
  btn.innerHTML = heartIcon(!wasFaved);
  btn.title = !wasFaved ? 'Remove from favourites' : 'Add to favourites';
  const place = allPlaces.find(p => p.id === placeId);
  if (place) place.is_favourited = !wasFaved;

  try {
    const res = await fetch(`/place/${placeId}/favourite`, {
      method: 'POST',
      headers: { 'X-CSRFToken': csrfToken(), 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (res.status === 401) {
      btn.dataset.faved = wasFaved;
      btn.innerHTML = heartIcon(wasFaved);
      if (place) place.is_favourited = wasFaved;
      window.location.href = '/login';
      return;
    }
    const data = await res.json();
    btn.dataset.faved = data.favourited;
    btn.innerHTML = heartIcon(data.favourited);
    if (place) place.is_favourited = data.favourited;
  } catch {
    btn.dataset.faved = wasFaved;
    btn.innerHTML = heartIcon(wasFaved);
    if (place) place.is_favourited = wasFaved;
  }
}

let allPlaces = [];
let filtered = [];

const searchInput   = document.getElementById('search');
const countryFilter = document.getElementById('filter-country');
const floraFilter   = document.getElementById('filter-flora');
const faunaFilter   = document.getElementById('filter-fauna');
const clearBtn      = document.getElementById('clear-filters');
const cardsEl       = document.getElementById('cards');
const countEl       = document.getElementById('count');
const modal         = document.getElementById('modal');
const modalBody     = document.getElementById('modal-body');

// ── Utilities ──────────────────────────────────────────────────────────────────

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ── Data loading ───────────────────────────────────────────────────────────────

async function loadPlaces() {
  try {
    const res = await fetch('/api/places');
    allPlaces = await res.json();
    populateFilters();
    applyFilters();
  } catch (err) {
    cardsEl.innerHTML = `<div class="empty-state">
      <p>Could not load places. Please refresh the page.</p>
    </div>`;
  }
}

// ── Filters ────────────────────────────────────────────────────────────────────

function populateFilters() {
  const countries = [...new Set(allPlaces.map(p => p.country))].sort();
  const flora     = [...new Set(allPlaces.flatMap(p => p.flora))].sort();
  const fauna     = [...new Set(allPlaces.flatMap(p => p.fauna))].sort();

  countryFilter.innerHTML = '<option value="">All Countries</option>' +
    countries.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');

  floraFilter.innerHTML = '<option value="">All Flora</option>' +
    flora.map(f => `<option value="${esc(f)}">${esc(f)}</option>`).join('');

  faunaFilter.innerHTML = '<option value="">All Fauna</option>' +
    fauna.map(f => `<option value="${esc(f)}">${esc(f)}</option>`).join('');
}

function applyFilters() {
  const search  = searchInput.value.toLowerCase().trim();
  const country = countryFilter.value;
  const flora   = floraFilter.value;
  const fauna   = faunaFilter.value;

  filtered = allPlaces.filter(p => {
    if (country && p.country !== country) return false;
    if (flora && !p.flora.includes(flora)) return false;
    if (fauna && !p.fauna.includes(fauna)) return false;
    if (search) {
      const haystack = [
        p.place_name, p.country, p.author_name,
        p.description, p.feeling,
        ...p.flora, ...p.fauna
      ].join(' ').toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  renderCards();
}

// ── Rendering ──────────────────────────────────────────────────────────────────

function renderCards() {
  countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    cardsEl.innerHTML = `<div class="empty-state">
      <p style="font-size:1.05rem">No places found matching your filters.</p>
      <p style="font-size:0.88rem;margin-top:0.4rem">Try adjusting your search or clearing the filters.</p>
    </div>`;
    return;
  }

  cardsEl.innerHTML = filtered.map(p => `
    <article class="card" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${esc(p.place_name)}">
      ${p.image_url ? `<img src="${esc(p.image_url)}" alt="${esc(p.place_name)}" class="card-image">` : ''}
      <div class="card-header">
        <div>
          <div class="card-place">${esc(p.place_name)}</div>
          <div class="card-country">${esc(p.country)}</div>
        </div>
        <button class="fav-btn ${p.is_favourited ? 'faved' : ''}" data-id="${p.id}" data-faved="${p.is_favourited}" title="${p.is_favourited ? 'Remove from favourites' : 'Add to favourites'}">${heartIcon(p.is_favourited)}</button>
      </div>
      ${p.feeling ? `<div class="card-feeling">&ldquo;${esc(p.feeling)}&rdquo;</div>` : ''}
      <div class="card-description">${esc(p.description)}</div>
      <div class="card-tags">
        ${p.flora.slice(0, 3).map(f => `<span class="tag">${esc(f)}</span>`).join('')}
        ${p.fauna.slice(0, 2).map(f => `<span class="tag fauna-tag">${esc(f)}</span>`).join('')}
      </div>
      <div class="card-author">&mdash; ${esc(p.author_name)}</div>
    </article>
  `).join('');

  cardsEl.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.fav-btn')) return;
      openModal(parseInt(card.dataset.id));
    });
    card.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.fav-btn')) {
        openModal(parseInt(card.dataset.id));
      }
    });
  });

  cardsEl.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleFavourite(parseInt(btn.dataset.id), btn);
    });
  });
}

// ── Modal ──────────────────────────────────────────────────────────────────────

function openModal(id) {
  const p = allPlaces.find(x => x.id === id);
  if (!p) return;

  modalBody.innerHTML = `
    ${p.image_url ? `<img src="${esc(p.image_url)}" alt="${esc(p.place_name)}" class="modal-image">` : ''}
    <div class="modal-place">${esc(p.place_name)}</div>
    <div class="modal-country">${esc(p.country)}</div>
    <div class="modal-description">${esc(p.description)}</div>
    ${p.feeling ? `<div class="modal-feeling">&ldquo;${esc(p.feeling)}&rdquo;</div>` : ''}
    <div class="modal-section-title">Flora</div>
    <div class="modal-tags">
      ${p.flora.map(f => `<span class="tag">${esc(f)}</span>`).join('') || '<span style="color:var(--text-light);font-size:0.85rem">None listed</span>'}
    </div>
    <div class="modal-section-title">Fauna</div>
    <div class="modal-tags">
      ${p.fauna.map(f => `<span class="tag fauna-tag">${esc(f)}</span>`).join('') || '<span style="color:var(--text-light);font-size:0.85rem">None listed</span>'}
    </div>
    <div class="modal-author">
      Shared by ${esc(p.author_name)}
      <br>
      <a href="/map#place-${p.id}" class="modal-map-link">View on map &rarr;</a>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
modal.querySelector('.modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Event listeners ────────────────────────────────────────────────────────────

searchInput.addEventListener('input', applyFilters);
countryFilter.addEventListener('change', applyFilters);
floraFilter.addEventListener('change', applyFilters);
faunaFilter.addEventListener('change', applyFilters);

clearBtn.addEventListener('click', () => {
  searchInput.value  = '';
  countryFilter.value = '';
  floraFilter.value   = '';
  faunaFilter.value   = '';
  applyFilters();
});

// ── Init ───────────────────────────────────────────────────────────────────────

loadPlaces();
