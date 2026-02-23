// ── Map page: Leaflet map with all places as markers ───────────────────────────

const map = L.map('map', {
  center: [20, 10],
  zoom: 2,
  minZoom: 1,
  maxZoom: 18,
  worldCopyJump: true,
});

// CartoDB Positron tiles — clean, light style
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
}).addTo(map);

// Custom marker icon
const markerIcon = L.divIcon({
  className: '',
  html: `<svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 24 14 24S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#2d6a4f"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -38],
});

const markerIconActive = L.divIcon({
  className: '',
  html: `<svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 28 16 28S32 27 32 16C32 7.163 24.837 0 16 0z" fill="#1a3a2a"/>
    <circle cx="16" cy="16" r="7" fill="white"/>
  </svg>`,
  iconSize: [32, 44],
  iconAnchor: [16, 44],
  popupAnchor: [0, -44],
});

let allPlaces = [];
let markers = {};
let activeMarkerId = null;

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ── Load data ──────────────────────────────────────────────────────────────────

async function loadPlaces() {
  const countEl = document.getElementById('map-count');
  const listEl  = document.getElementById('map-list');

  try {
    const res = await fetch('/api/places');
    allPlaces = await res.json();
  } catch (err) {
    listEl.innerHTML = '<div class="loading-state">Could not load places.</div>';
    return;
  }

  countEl.textContent = allPlaces.length;

  // Render sidebar list
  listEl.innerHTML = allPlaces.map(p => `
    <div class="map-list-item" data-id="${p.id}">
      <div class="map-list-place">${esc(p.place_name)}</div>
      <div class="map-list-country">${esc(p.country)} · ${esc(p.author_name)}</div>
    </div>
  `).join('');

  listEl.querySelectorAll('.map-list-item').forEach(item => {
    item.addEventListener('click', () => focusPlace(parseInt(item.dataset.id)));
  });

  // Add markers
  allPlaces.forEach(p => {
    const marker = L.marker([p.latitude, p.longitude], { icon: markerIcon })
      .addTo(map);

    const popupContent = `
      <div class="popup-place">${esc(p.place_name)}</div>
      <div class="popup-country">${esc(p.country)}</div>
      ${p.feeling ? `<div class="popup-feeling">&ldquo;${esc(p.feeling)}&rdquo;</div>` : ''}
      <div class="popup-description">${esc(p.description)}</div>
      <div class="popup-author">&mdash; ${esc(p.author_name)}</div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 280 });

    marker.on('click', () => {
      highlightListItem(p.id);
      setActiveMarker(p.id);
    });

    marker.on('popupclose', () => {
      if (activeMarkerId === p.id) {
        setActiveMarker(null);
        highlightListItem(null);
      }
    });

    markers[p.id] = marker;
  });

  // Check for #place-N in URL hash (deep-link from home page modal)
  const hash = window.location.hash;
  if (hash.startsWith('#place-')) {
    const id = parseInt(hash.replace('#place-', ''));
    if (id && markers[id]) {
      setTimeout(() => focusPlace(id), 300);
    }
  }
}

function focusPlace(id) {
  const place  = allPlaces.find(p => p.id === id);
  const marker = markers[id];
  if (!place || !marker) return;

  map.flyTo([place.latitude, place.longitude], 8, { duration: 0.8 });
  setTimeout(() => marker.openPopup(), 850);
  highlightListItem(id);
  setActiveMarker(id);
}

function setActiveMarker(id) {
  if (activeMarkerId && markers[activeMarkerId]) {
    markers[activeMarkerId].setIcon(markerIcon);
  }
  activeMarkerId = id;
  if (id && markers[id]) {
    markers[id].setIcon(markerIconActive);
  }
}

function highlightListItem(id) {
  document.querySelectorAll('.map-list-item').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.id) === id);
  });
  if (id) {
    const activeItem = document.querySelector(`.map-list-item[data-id="${id}"]`);
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
}

// ── Init ───────────────────────────────────────────────────────────────────────

loadPlaces();
