// ── Edit page: location picker initialised with existing pin ───────────────────

const latInput     = document.getElementById('latitude');
const lngInput     = document.getElementById('longitude');
const locationHint = document.getElementById('location-hint');
const countryInput = document.getElementById('country');

const map = L.map('location-map', {
  center: [EXISTING_LAT, EXISTING_LNG],
  zoom: 6,
  minZoom: 1,
  maxZoom: 18,
  worldCopyJump: true,
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
}).addTo(map);

const pinIcon = L.divIcon({
  className: '',
  html: `<svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 24 14 24S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#2d6a4f"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
});

// Place existing pin immediately
const marker = L.marker([EXISTING_LAT, EXISTING_LNG], {
  icon: pinIcon,
  draggable: true,
}).addTo(map);

marker.on('dragend', function () {
  const pos = marker.getLatLng();
  updatePin(pos.lat, pos.lng);
  reverseGeocode(pos.lat, pos.lng, /* overwrite= */ false);
});

// Click map to move pin
map.on('click', function (e) {
  marker.setLatLng(e.latlng);
  updatePin(e.latlng.lat, e.latlng.lng);
  reverseGeocode(e.latlng.lat, e.latlng.lng, /* overwrite= */ false);
});

function updatePin(lat, lng) {
  const rLat = Math.round(lat * 1e6) / 1e6;
  const rLng = Math.round(lng * 1e6) / 1e6;
  latInput.value = rLat;
  lngInput.value = rLng;
  locationHint.textContent = `Pin at ${rLat.toFixed(4)}°, ${rLng.toFixed(4)}°. Drag or click to adjust.`;
}

let geocodeTimer = null;

function reverseGeocode(lat, lng, overwrite) {
  clearTimeout(geocodeTimer);
  geocodeTimer = setTimeout(async () => {
    if (!overwrite && countryInput.value.trim()) return;
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
      const res = await fetch(url, { headers: { 'User-Agent': 'OurFavouritePlaces/1.0' } });
      const data = await res.json();
      const country = data?.address?.country;
      if (country) countryInput.value = country;
    } catch { /* silently fail */ }
  }, 400);
}
