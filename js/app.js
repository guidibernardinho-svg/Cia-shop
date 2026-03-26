/**
 * CIAShop - Main Application Logic
 * js/app.js
 */

'use strict';

/* ── State ── */
const state = {
  currentCat: 'all',
  selectedGame: null,
  downloadGame: null,
  downloadTimer: null
};

/* ── DOM References ── */
const $ = id => document.getElementById(id);

const els = {
  grid:        $('gamesGrid'),
  detail:      $('detailPanel'),
  search:      $('searchInput'),
  sort:        $('sortSelect'),
  clock:       $('clock'),
  totalCount:  $('totalCount'),
  selectedTitle: $('selectedTitle'),
  modal:       $('downloadModal'),
  modalIcon:   $('modalIcon'),
  modalTitle:  $('modalTitle'),
  modalBody:   $('modalBody'),
  progBar:     $('progBar'),
  progFill:    $('progFill'),
  progText:    $('progText'),
  confirmBtn:  $('confirmDownload'),
  cancelBtn:   $('cancelDownload'),
  catNav:      $('categoryNav')
};

/* ── Helpers ── */
function stars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Category Counts ── */
function updateCounts() {
  const cats = ['action', 'rpg', 'platform', 'puzzle', 'sports', 'adventure', 'homebrew'];
  $('cnt-all').textContent = GAMES.length;
  cats.forEach(cat => {
    const el = $('cnt-' + cat);
    if (el) el.textContent = GAMES.filter(g => g.cat === cat).length;
  });
  els.totalCount.textContent = GAMES.length;
}

/* ── Filter + Sort ── */
function getFilteredGames() {
  const query = els.search.value.toLowerCase().trim();
  const sortBy = els.sort.value;

  let list = GAMES.filter(g => {
    const catMatch  = state.currentCat === 'all' || g.cat === state.currentCat;
    const textMatch = !query || g.title.toLowerCase().includes(query);
    return catMatch && textMatch;
  });

  switch (sortBy) {
    case 'alpha':  list.sort((a, b) => a.title.localeCompare(b.title));            break;
    case 'size':   list.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));   break;
    case 'rating': list.sort((a, b) => b.rating - a.rating);                       break;
    case 'new':    list.sort((a, b) => b.year - a.year);                           break;
  }

  return list;
}

/* ── Render Grid ── */
function renderGrid() {
  const list = getFilteredGames();
  els.grid.innerHTML = '';

  if (!list.length) {
    els.grid.innerHTML = '<div class="no-results">Nenhum título encontrado</div>';
    return;
  }

  list.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card' + (state.selectedGame === game.id ? ' selected' : '');
    card.dataset.id = game.id;

    const badgeHtml = game.badge
      ? `<div class="game-badge badge-${escHtml(game.badge)}">${game.badge.toUpperCase()}</div>`
      : '';

    card.innerHTML = `
      <div class="game-cover" style="background:${escHtml(game.color)}">
        ${badgeHtml}
        <span class="game-cover-icon">${game.icon}</span>
      </div>
      <div class="game-info">
        <div class="game-title" title="${escHtml(game.title)}">${escHtml(game.title)}</div>
        <div class="game-meta">
          <span class="game-region">${escHtml(game.region)}</span>
          <span class="game-size">${escHtml(game.size)}</span>
        </div>
        <div class="game-stars">${stars(game.rating)}</div>
      </div>
    `;

    card.addEventListener('click', () => selectGame(game, card));
    els.grid.appendChild(card);
  });
}

/* ── Select Game ── */
function selectGame(game, cardEl) {
  state.selectedGame = game.id;
  document.querySelectorAll('.game-card').forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');
  els.selectedTitle.textContent = game.title;
  renderDetail(game);
}

/* ── Render Detail Panel ── */
function renderDetail(game) {
  els.detail.className = 'detail-panel visible';
  els.detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-icon">${game.icon}</div>
      <div class="detail-meta">
        <div class="detail-title">${escHtml(game.title)}</div>
        <div class="detail-tags">
          <span class="dtag dtag-blue">${escHtml(game.region)}</span>
          <span class="dtag dtag-green">.CIA</span>
          <span class="dtag dtag-purple">${escHtml(game.cat.toUpperCase())}</span>
          <span class="dtag dtag-gray">v${escHtml(game.version)}</span>
        </div>
      </div>
    </div>
    <p class="detail-desc">${escHtml(game.desc)}</p>
    <div class="detail-stats">
      <div class="dstat">
        <span class="dstat-label">Tamanho</span>
        <span class="dstat-value">${escHtml(game.size)}</span>
      </div>
      <div class="dstat">
        <span class="dstat-label">Avaliação</span>
        <span class="dstat-value">${stars(game.rating)}</span>
      </div>
      <div class="dstat">
        <span class="dstat-label">Title ID</span>
        <span class="dstat-value" style="font-size:11px;font-family:monospace">${escHtml(game.titleId.substring(0, 8))}…</span>
      </div>
    </div>
    <button class="download-btn" id="detailDownloadBtn">▼ BAIXAR E INSTALAR CIA</button>
    <div class="progress-bar" id="detailProgBar">
      <div class="progress-fill" id="detailProgFill"></div>
    </div>
    <div class="progress-text" id="detailProgText"></div>
  `;

  $('detailDownloadBtn').addEventListener('click', () => openModal(game));
}

/* ── Category Filter ── */
function setCategory(cat) {
  state.currentCat = cat;
  document.querySelectorAll('.cat-item').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === cat);
  });
  renderGrid();
}

/* ── Modal ── */
function openModal(game) {
  state.downloadGame = game;

  els.modalIcon.textContent  = game.icon;
  els.modalTitle.textContent = 'INSTALAR CIA';
  els.modalBody.innerHTML    = `
    <strong>${escHtml(game.title)}</strong><br><br>
    Tamanho: ${escHtml(game.size)}<br>
    Região: ${escHtml(game.region)}<br>
    Title ID: ${escHtml(game.titleId)}<br><br>
    <span style="color:var(--ds-yellow)">⚠ Requer CFW (Luma3DS) instalado</span>
  `;

  els.progBar.style.display  = 'none';
  els.progText.style.display = 'none';
  els.progFill.style.width   = '0%';
  els.progText.textContent   = '';

  els.modal.classList.add('open');
}

function closeModal() {
  els.modal.classList.remove('open');
  state.downloadGame = null;
  if (state.downloadTimer) {
    clearInterval(state.downloadTimer);
    state.downloadTimer = null;
  }
}

function startDownload() {
  const game = state.downloadGame;
  if (!game) return;

  els.modal.classList.remove('open');

  const progBar  = $('detailProgBar');
  const progFill = $('detailProgFill');
  const progText = $('detailProgText');

  if (!progBar) return;

  progBar.style.display  = 'block';
  progText.style.display = 'block';

  const steps = [
    'Conectando ao servidor...',
    'Baixando CIA...',
    'Verificando integridade...',
    'Instalando no SD...',
    'Concluído!'
  ];

  let progress = 0;

  state.downloadTimer = setInterval(() => {
    progress += Math.random() * 8 + 2;

    if (progress >= 100) {
      progress = 100;
      clearInterval(state.downloadTimer);
      state.downloadTimer = null;
      progText.textContent   = '✓ Instalado com sucesso!';
      progText.style.color   = 'var(--ds-green)';
    } else {
      const stepIndex = Math.min(Math.floor(progress / 25), steps.length - 2);
      progText.textContent = `${steps[stepIndex]} ${Math.round(progress)}%`;
      progText.style.color = 'var(--ds-cyan)';
    }

    progFill.style.width = progress + '%';
  }, 150);
}

/* ── Clock ── */
function updateClock() {
  els.clock.textContent = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

/* ── Event Listeners ── */
els.search.addEventListener('input', renderGrid);
els.sort.addEventListener('change', renderGrid);

els.catNav.addEventListener('click', e => {
  const item = e.target.closest('.cat-item');
  if (item && item.dataset.cat) setCategory(item.dataset.cat);
});

els.confirmBtn.addEventListener('click', startDownload);
els.cancelBtn.addEventListener('click', closeModal);

els.modal.addEventListener('click', e => {
  if (e.target === els.modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Init ── */
updateCounts();
renderGrid();
updateClock();
setInterval(updateClock, 1000);
