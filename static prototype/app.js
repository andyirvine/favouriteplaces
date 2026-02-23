// State
let allDescriptions = [...descriptions];
let filtered = [...allDescriptions];

// DOM elements
const searchInput = document.getElementById('search');
const countryFilter = document.getElementById('filter-country');
const floraFilter = document.getElementById('filter-flora');
const faunaFilter = document.getElementById('filter-fauna');
const clearBtn = document.getElementById('clear-filters');
const cardsContainer = document.getElementById('cards');
const countEl = document.getElementById('count');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const form = document.getElementById('submit-form');
const formSuccess = document.getElementById('form-success');
const viewSubmissionBtn = document.getElementById('view-submission');

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
  });
});

// Populate filter dropdowns
function populateFilters() {
  const countries = [...new Set(allDescriptions.map(d => d.country))].sort();
  const flora = [...new Set(allDescriptions.flatMap(d => d.flora))].sort();
  const fauna = [...new Set(allDescriptions.flatMap(d => d.fauna))].sort();

  countryFilter.innerHTML = '<option value="">All Countries</option>' +
    countries.map(c => `<option value="${c}">${c}</option>`).join('');

  floraFilter.innerHTML = '<option value="">All Flora</option>' +
    flora.map(f => `<option value="${escapeHtml(f)}">${f}</option>`).join('');

  faunaFilter.innerHTML = '<option value="">All Fauna</option>' +
    fauna.map(f => `<option value="${escapeHtml(f)}">${f}</option>`).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Filter descriptions
function applyFilters() {
  const search = searchInput.value.toLowerCase().trim();
  const country = countryFilter.value;
  const flora = floraFilter.value;
  const fauna = faunaFilter.value;

  filtered = allDescriptions.filter(d => {
    if (country && d.country !== country) return false;
    if (flora && !d.flora.includes(flora)) return false;
    if (fauna && !d.fauna.includes(fauna)) return false;
    if (search) {
      const haystack = [
        d.place, d.country, d.name, d.description, d.feeling,
        ...d.flora, ...d.fauna
      ].join(' ').toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  renderCards();
}

// Render cards
function renderCards() {
  countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    cardsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-light);">
        <p style="font-size: 1.1rem;">No places found matching your filters.</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try adjusting your search or clearing filters.</p>
      </div>`;
    return;
  }

  cardsContainer.innerHTML = filtered.map(d => `
    <div class="card" data-id="${d.id}">
      <div class="card-header">
        <div class="card-place">${escapeHtml(d.place)}</div>
        <div class="card-country">${escapeHtml(d.country)}</div>
      </div>
      <div class="card-feeling">"${escapeHtml(d.feeling)}"</div>
      <div class="card-description">${escapeHtml(d.description)}</div>
      <div class="card-tags">
        ${d.flora.slice(0, 3).map(f => `<span class="tag">${escapeHtml(f)}</span>`).join('')}
        ${d.fauna.slice(0, 2).map(f => `<span class="tag fauna-tag">${escapeHtml(f)}</span>`).join('')}
      </div>
      <div class="card-author">&mdash; ${escapeHtml(d.name)}</div>
    </div>
  `).join('');

  // Add click handlers
  cardsContainer.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      openModal(id);
    });
  });
}

// Modal
function openModal(id) {
  const d = allDescriptions.find(d => d.id === id);
  if (!d) return;

  modalBody.innerHTML = `
    <div class="modal-place">${escapeHtml(d.place)}</div>
    <div class="modal-country">${escapeHtml(d.country)}</div>
    <div class="modal-description">${escapeHtml(d.description)}</div>
    <div class="modal-feeling">"${escapeHtml(d.feeling)}"</div>
    <div class="modal-section-title">Flora</div>
    <div class="modal-tags">
      ${d.flora.map(f => `<span class="tag">${escapeHtml(f)}</span>`).join('')}
    </div>
    <div class="modal-section-title">Fauna</div>
    <div class="modal-tags">
      ${d.fauna.map(f => `<span class="tag fauna-tag">${escapeHtml(f)}</span>`).join('')}
    </div>
    <div class="modal-author">Shared by ${escapeHtml(d.name)}</div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
modal.querySelector('.modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Filter event listeners
searchInput.addEventListener('input', applyFilters);
countryFilter.addEventListener('change', applyFilters);
floraFilter.addEventListener('change', applyFilters);
faunaFilter.addEventListener('change', applyFilters);

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  countryFilter.value = '';
  floraFilter.value = '';
  faunaFilter.value = '';
  applyFilters();
});

// Form submission
let lastSubmittedId = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newEntry = {
    id: allDescriptions.length + 1,
    name: document.getElementById('form-name').value.trim(),
    country: document.getElementById('form-country').value.trim(),
    place: document.getElementById('form-place').value.trim(),
    flora: document.getElementById('form-flora').value.split(',').map(s => s.trim()).filter(Boolean),
    fauna: document.getElementById('form-fauna').value.split(',').map(s => s.trim()).filter(Boolean),
    description: document.getElementById('form-description').value.trim(),
    feeling: document.getElementById('form-feeling').value.trim()
  };

  allDescriptions.unshift(newEntry);
  lastSubmittedId = newEntry.id;
  populateFilters();
  applyFilters();

  form.reset();
  formSuccess.hidden = false;
  form.style.display = 'none';
});

viewSubmissionBtn.addEventListener('click', () => {
  // Switch to explore
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector('[data-section="explore"]').classList.add('active');
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('explore').classList.add('active');

  // Clear filters and show all
  searchInput.value = '';
  countryFilter.value = '';
  floraFilter.value = '';
  faunaFilter.value = '';
  applyFilters();

  // Open the modal for the new entry
  if (lastSubmittedId) {
    openModal(lastSubmittedId);
  }

  // Reset form state for next time
  formSuccess.hidden = true;
  form.style.display = '';
});

// Init
populateFilters();
applyFilters();
