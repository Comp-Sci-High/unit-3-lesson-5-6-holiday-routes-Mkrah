// Color hex values for each crystal
const COLORS = {
  blue: { hex: '#6cf', label: 'Blue' },
  red: { hex: '#ff3366', label: 'Red' },
  green: { hex: '#00ff88', label: 'Green' },
  purple: { hex: '#dd77ff', label: 'Purple' },
  cyan: { hex: '#00ffff', label: 'Cyan' },
  yellow: { hex: '#ffff00', label: 'Yellow' },
  orange: { hex: '#ff9900', label: 'Orange' },
  white: { hex: '#ffffff', label: 'White' }
};

// State object
let saber = {
  type: 'single',
  color: 'blue',
  hilt: 'classic'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  updatePreview();
});

function initializeEventListeners() {
  // Saber type buttons
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      saber.type = e.target.dataset.type;
      updatePreview();
    });
  });

  // Color buttons
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      saber.color = e.target.dataset.color;
      updatePreview();
    });
  });

  // Hilt buttons
  document.querySelectorAll('.hilt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.hilt-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      saber.hilt = e.target.dataset.hilt;
      updatePreview();
    });
  });

  // Save button
  document.getElementById('saveBtn').addEventListener('click', () => {
    const config = getSaberLabel();
    localStorage.setItem('customSaber', JSON.stringify(saber));
    alert(`✓ Your ${config} has been saved!`);
  });

  // Set first color button as active (blue)
  document.querySelector('.color-btn[data-color="blue"]').classList.add('active');
}

function updatePreview() {
  updateSVG();
  updateInfo();
}

function updateSVG() {
  const svg = document.querySelector('.saber-svg');
  const colorObj = COLORS[saber.color];

  // Create new gradient dynamically
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    svg.appendChild(defs);
  }

  // Update or create gradient
  let gradient = defs.querySelector('#blueGradient');
  if (!gradient) {
    gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = 'blueGradient';
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '0%');
    defs.appendChild(gradient);
  }

  // Update gradient stops with new color
  const color = colorObj.hex;
  gradient.innerHTML = `
    <stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
    <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
    <stop offset="100%" style="stop-color:${color};stop-opacity:0.3" />
  `;

  // Get blade and container
  const blade = svg.querySelector('#blade');
  const container = svg.querySelector('#bladeContainer');

  // Clear container for fresh render
  container.innerHTML = '';

  // Render based on saber type
  switch (saber.type) {
    case 'single':
      renderSingleBlade(container, color);
      break;
    case 'saberstaff':
      renderSaberstaff(container, color);
      break;
    case 'pike':
      renderPike(container, color);
      break;
    case 'dualwield':
      renderDualWield(container, color);
      break;
    case 'shoto':
      renderShoto(container, color);
      break;
    case 'crossguard':
      renderCrossguard(container, color);
      break;
    case 'lightwhip':
      renderLightwhip(container, color);
      break;
  }

  // Update hilt
  updateHilt();
}

function renderSingleBlade(container, color) {
  const blade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  blade.setAttribute('x', '85');
  blade.setAttribute('y', '50');
  blade.setAttribute('width', '30');
  blade.setAttribute('height', '270');
  blade.setAttribute('rx', '15');
  blade.setAttribute('fill', color);
  blade.setAttribute('opacity', '0.8');
  blade.setAttribute('filter', 'url(#glow)');
  blade.style.textShadow = `0 0 30px ${color}`;
  container.appendChild(blade);
  updateHiltForType('single');
}

function renderSaberstaff(container, color) {
  // Top blade
  const topBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  topBlade.setAttribute('x', '85');
  topBlade.setAttribute('y', '20');
  topBlade.setAttribute('width', '30');
  topBlade.setAttribute('height', '130');
  topBlade.setAttribute('rx', '15');
  topBlade.setAttribute('fill', color);
  topBlade.setAttribute('opacity', '0.8');
  topBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(topBlade);

  // Bottom blade
  const bottomBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bottomBlade.setAttribute('x', '85');
  bottomBlade.setAttribute('y', '250');
  bottomBlade.setAttribute('width', '30');
  bottomBlade.setAttribute('height', '130');
  bottomBlade.setAttribute('rx', '15');
  bottomBlade.setAttribute('fill', color);
  bottomBlade.setAttribute('opacity', '0.8');
  bottomBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(bottomBlade);

  // Staff body
  const staff = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  staff.setAttribute('x', '90');
  staff.setAttribute('y', '160');
  staff.setAttribute('width', '20');
  staff.setAttribute('height', '80');
  staff.setAttribute('fill', '#666');
  container.appendChild(staff);
  updateHiltForType('saberstaff');
}

function renderPike(container, color) {
  // Long blade
  const blade = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  blade.setAttribute('points', '100,10 110,30 110,280 100,300 90,280 90,30');
  blade.setAttribute('fill', color);
  blade.setAttribute('opacity', '0.8');
  blade.setAttribute('filter', 'url(#glow)');
  container.appendChild(blade);
  updateHiltForType('pike');
}

function renderDualWield(container, color) {
  // Left blade
  const leftBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  leftBlade.setAttribute('x', '50');
  leftBlade.setAttribute('y', '60');
  leftBlade.setAttribute('width', '25');
  leftBlade.setAttribute('height', '220');
  leftBlade.setAttribute('rx', '12');
  leftBlade.setAttribute('fill', color);
  leftBlade.setAttribute('opacity', '0.8');
  leftBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(leftBlade);

  // Right blade
  const rightBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rightBlade.setAttribute('x', '125');
  rightBlade.setAttribute('y', '60');
  rightBlade.setAttribute('width', '25');
  rightBlade.setAttribute('height', '220');
  rightBlade.setAttribute('rx', '12');
  rightBlade.setAttribute('fill', color);
  rightBlade.setAttribute('opacity', '0.8');
  rightBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(rightBlade);
  updateHiltForType('dualwield');
}

function renderShoto(container, color) {
  // Main blade (shorter)
  const mainBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  mainBlade.setAttribute('x', '85');
  mainBlade.setAttribute('y', '80');
  mainBlade.setAttribute('width', '30');
  mainBlade.setAttribute('height', '180');
  mainBlade.setAttribute('rx', '15');
  mainBlade.setAttribute('fill', color);
  mainBlade.setAttribute('opacity', '0.8');
  mainBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(mainBlade);

  // Small blade
  const smallBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  smallBlade.setAttribute('x', '95');
  smallBlade.setAttribute('y', '40');
  smallBlade.setAttribute('width', '10');
  smallBlade.setAttribute('height', '80');
  smallBlade.setAttribute('rx', '5');
  smallBlade.setAttribute('fill', color);
  smallBlade.setAttribute('opacity', '0.7');
  smallBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(smallBlade);
  updateHiltForType('shoto');
}

function renderCrossguard(container, color) {
  // Main blade
  const mainBlade = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  mainBlade.setAttribute('x', '85');
  mainBlade.setAttribute('y', '50');
  mainBlade.setAttribute('width', '30');
  mainBlade.setAttribute('height', '240');
  mainBlade.setAttribute('rx', '15');
  mainBlade.setAttribute('fill', color);
  mainBlade.setAttribute('opacity', '0.8');
  mainBlade.setAttribute('filter', 'url(#glow)');
  container.appendChild(mainBlade);

  // Cross guard blades
  const guardLeft = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  guardLeft.setAttribute('x', '40');
  guardLeft.setAttribute('y', '95');
  guardLeft.setAttribute('width', '35');
  guardLeft.setAttribute('height', '15');
  guardLeft.setAttribute('rx', '7');
  guardLeft.setAttribute('fill', color);
  guardLeft.setAttribute('opacity', '0.6');
  container.appendChild(guardLeft);

  const guardRight = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  guardRight.setAttribute('x', '125');
  guardRight.setAttribute('y', '95');
  guardRight.setAttribute('width', '35');
  guardRight.setAttribute('height', '15');
  updateHiltForType('crossguard');
  guardRight.setAttribute('rx', '7');
  guardRight.setAttribute('fill', color);
  guardRight.setAttribute('opacity', '0.6');
  container.appendChild(guardRight);
}

function renderLightwhip(container, color) {
  // Whip-like blade with curve
  const whip = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  whip.setAttribute('d', 'M 100 50 Q 120 120, 110 200 Q 100 260, 95 300');
  whip.setAttribute('stroke', color);
  whip.setAttribute('stroke-width', '12');
  updateHiltForType('lightwhip');
  whip.setAttribute('fill', 'none');
  whip.setAttribute('stroke-linecap', 'round');
  whip.setAttribute('opacity', '0.8');
  whip.setAttribute('filter', 'url(#glow)');
  container.appendChild(whip);
}

function updateHilt() {
  updateHiltForType(saber.type);
}

function updateHiltForType(saberType) {
  const hilt = document.querySelector('#hilt');
  hilt.className.baseVal = `hilt-style-${saber.hilt}`;
  const hiltEl = document.querySelector('#hilt');

  // Clear and rebuild hilt
  hiltEl.innerHTML = '';

  // Determine hilt configuration based on saber type
  switch (saberType) {
    case 'pike':
      renderPikeHilt(hiltEl);
      break;
    case 'saberstaff':
      renderSaberStaffHilt(hiltEl);
      break;
    case 'dualwield':
      renderDualWieldHilt(hiltEl);
      break;
    default:
      // Single, shoto, crossguard, lightwhip use standard hilt
      switch (saber.hilt) {
        case 'classic':
          renderClassicHilt(hiltEl);
          break;
        case 'sleek':
          renderSleekHilt(hiltEl);
          break;
        case 'ornate':
          renderOrnateHilt(hiltEl);
          break;
        case 'rugged':
          renderRuggedHilt(hiltEl);
          break;
      }
  }
}

function renderClassicHilt(hiltEl) {
  const grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  grip.setAttribute('x', '75');
  grip.setAttribute('y', '320');
  grip.setAttribute('width', '50');
  grip.setAttribute('height', '70');
  grip.setAttribute('fill', '#8b7355');
  grip.setAttribute('rx', '4');
  hiltEl.appendChild(grip);

  const band = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  band.setAttribute('x', '70');
  band.setAttribute('y', '315');
  band.setAttribute('width', '60');
  band.setAttribute('height', '8');
  band.setAttribute('fill', '#c0a080');
  band.setAttribute('rx', '2');
  hiltEl.appendChild(band);

  const pommel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  pommel.setAttribute('cx', '100');
  pommel.setAttribute('cy', '310');
  pommel.setAttribute('r', '12');
  pommel.setAttribute('fill', '#b8860b');
  hiltEl.appendChild(pommel);
}

function renderSleekHilt(hiltEl) {
  const grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  grip.setAttribute('x', '80');
  grip.setAttribute('y', '320');
  grip.setAttribute('width', '40');
  grip.setAttribute('height', '75');
  grip.setAttribute('fill', '#2a2a2a');
  grip.setAttribute('rx', '8');
  hiltEl.appendChild(grip);

  const accent = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  accent.setAttribute('x', '78');
  accent.setAttribute('y', '330');
  accent.setAttribute('width', '44');
  accent.setAttribute('height', '3');
  accent.setAttribute('fill', '#00ffff');
  hiltEl.appendChild(accent);
}

function renderOrnateHilt(hiltEl) {
  const grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  grip.setAttribute('x', '75');
  grip.setAttribute('y', '325');
  grip.setAttribute('width', '50');
  grip.setAttribute('height', '65');
  grip.setAttribute('fill', '#5d4e37');
  grip.setAttribute('rx', '6');
  hiltEl.appendChild(grip);

  const deco1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  deco1.setAttribute('cx', '85');
  deco1.setAttribute('cy', '350');
  deco1.setAttribute('r', '3');
  deco1.setAttribute('fill', '#ffd700');
  hiltEl.appendChild(deco1);

  const deco2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  deco2.setAttribute('cx', '115');
  deco2.setAttribute('cy', '350');
  deco2.setAttribute('r', '3');
  deco2.setAttribute('fill', '#ffd700');
  hiltEl.appendChild(deco2);
}

function renderRuggedHilt(hiltEl) {
  const grip = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  grip.setAttribute('points', '75,320 125,320 123,390 77,390');
  grip.setAttribute('fill', '#3d3d3d');
  hiltEl.appendChild(grip);

  const ridge1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  ridge1.setAttribute('x1', '85');
  ridge1.setAttribute('y1', '330');
  ridge1.setAttribute('x2', '85');
  ridge1.setAttribute('y2', '375');
  ridge1.setAttribute('stroke', '#555');
  ridge1.setAttribute('stroke-width', '2');
  hiltEl.appendChild(ridge1);

  const ridge2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  ridge2.setAttribute('x1', '115');
  ridge2.setAttribute('y1', '330');
  ridge2.setAttribute('x2', '115');
  ridge2.setAttribute('y2', '375');
  ridge2.setAttribute('stroke', '#555');
  ridge2.setAttribute('stroke-width', '2');
  hiltEl.appendChild(ridge2);
}

// Special hilt renderers for different saber types
function renderPikeHilt(hiltEl) {
  // Pike has a longer hilt to match the long blade
  let grip, band, pommel;
  
  switch (saber.hilt) {
    case 'classic':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      grip.setAttribute('x', '75');
      grip.setAttribute('y', '300');
      grip.setAttribute('width', '50');
      grip.setAttribute('height', '90');
      grip.setAttribute('fill', '#8b7355');
      grip.setAttribute('rx', '4');
      hiltEl.appendChild(grip);

      band = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      band.setAttribute('x', '70');
      band.setAttribute('y', '295');
      band.setAttribute('width', '60');
      band.setAttribute('height', '8');
      band.setAttribute('fill', '#c0a080');
      band.setAttribute('rx', '2');
      hiltEl.appendChild(band);

      pommel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      pommel.setAttribute('cx', '100');
      pommel.setAttribute('cy', '395');
      pommel.setAttribute('r', '12');
      pommel.setAttribute('fill', '#b8860b');
      hiltEl.appendChild(pommel);
      break;
    
    case 'sleek':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      grip.setAttribute('x', '80');
      grip.setAttribute('y', '300');
      grip.setAttribute('width', '40');
      grip.setAttribute('height', '95');
      grip.setAttribute('fill', '#2a2a2a');
      grip.setAttribute('rx', '8');
      hiltEl.appendChild(grip);

      const accent = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      accent.setAttribute('x', '78');
      accent.setAttribute('y', '320');
      accent.setAttribute('width', '44');
      accent.setAttribute('height', '3');
      accent.setAttribute('fill', '#00ffff');
      hiltEl.appendChild(accent);
      break;

    case 'ornate':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      grip.setAttribute('x', '75');
      grip.setAttribute('y', '300');
      grip.setAttribute('width', '50');
      grip.setAttribute('height', '90');
      grip.setAttribute('fill', '#5d4e37');
      grip.setAttribute('rx', '6');
      hiltEl.appendChild(grip);

      const deco1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      deco1.setAttribute('cx', '85');
      deco1.setAttribute('cy', '330');
      deco1.setAttribute('r', '3');
      deco1.setAttribute('fill', '#ffd700');
      hiltEl.appendChild(deco1);

      const deco2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      deco2.setAttribute('cx', '115');
      deco2.setAttribute('cy', '330');
      deco2.setAttribute('r', '3');
      deco2.setAttribute('fill', '#ffd700');
      hiltEl.appendChild(deco2);
      break;

    case 'rugged':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      grip.setAttribute('points', '75,300 125,300 123,390 77,390');
      grip.setAttribute('fill', '#3d3d3d');
      hiltEl.appendChild(grip);

      const ridge1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ridge1.setAttribute('x1', '85');
      ridge1.setAttribute('y1', '310');
      ridge1.setAttribute('x2', '85');
      ridge1.setAttribute('y2', '380');
      ridge1.setAttribute('stroke', '#555');
      ridge1.setAttribute('stroke-width', '2');
      hiltEl.appendChild(ridge1);

      const ridge2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ridge2.setAttribute('x1', '115');
      ridge2.setAttribute('y1', '310');
      ridge2.setAttribute('x2', '115');
      ridge2.setAttribute('y2', '380');
      ridge2.setAttribute('stroke', '#555');
      ridge2.setAttribute('stroke-width', '2');
      hiltEl.appendChild(ridge2);
      break;
  }
}

function renderSaberStaffHilt(hiltEl) {
  // Saberstaff has a center hilt that connects to middle section
  let grip, band, pommel;
  
  switch (saber.hilt) {
    case 'classic':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      grip.setAttribute('x', '75');
      grip.setAttribute('y', '320');
      grip.setAttribute('width', '50');
      grip.setAttribute('height', '70');
      grip.setAttribute('fill', '#8b7355');
      grip.setAttribute('rx', '4');
      hiltEl.appendChild(grip);

      band = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      band.setAttribute('x', '70');
      band.setAttribute('y', '315');
      band.setAttribute('width', '60');
      band.setAttribute('height', '8');
      band.setAttribute('fill', '#c0a080');
      band.setAttribute('rx', '2');
      hiltEl.appendChild(band);

      pommel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      pommel.setAttribute('cx', '100');
      pommel.setAttribute('cy', '310');
      pommel.setAttribute('r', '12');
      pommel.setAttribute('fill', '#b8860b');
      hiltEl.appendChild(pommel);
      break;

    case 'sleek':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      grip.setAttribute('x', '80');
      grip.setAttribute('y', '320');
      grip.setAttribute('width', '40');
      grip.setAttribute('height', '75');
      grip.setAttribute('fill', '#2a2a2a');
      grip.setAttribute('rx', '8');
      hiltEl.appendChild(grip);

      const accent = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      accent.setAttribute('x', '78');
      accent.setAttribute('y', '330');
      accent.setAttribute('width', '44');
      accent.setAttribute('height', '3');
      accent.setAttribute('fill', '#00ffff');
      hiltEl.appendChild(accent);
      break;

    case 'ornate':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      grip.setAttribute('x', '75');
      grip.setAttribute('y', '325');
      grip.setAttribute('width', '50');
      grip.setAttribute('height', '65');
      grip.setAttribute('fill', '#5d4e37');
      grip.setAttribute('rx', '6');
      hiltEl.appendChild(grip);

      const deco1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      deco1.setAttribute('cx', '85');
      deco1.setAttribute('cy', '350');
      deco1.setAttribute('r', '3');
      deco1.setAttribute('fill', '#ffd700');
      hiltEl.appendChild(deco1);

      const deco2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      deco2.setAttribute('cx', '115');
      deco2.setAttribute('cy', '350');
      deco2.setAttribute('r', '3');
      deco2.setAttribute('fill', '#ffd700');
      hiltEl.appendChild(deco2);
      break;

    case 'rugged':
      grip = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      grip.setAttribute('points', '75,320 125,320 123,390 77,390');
      grip.setAttribute('fill', '#3d3d3d');
      hiltEl.appendChild(grip);

      const ridge1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ridge1.setAttribute('x1', '85');
      ridge1.setAttribute('y1', '330');
      ridge1.setAttribute('x2', '85');
      ridge1.setAttribute('y2', '375');
      ridge1.setAttribute('stroke', '#555');
      ridge1.setAttribute('stroke-width', '2');
      hiltEl.appendChild(ridge1);

      const ridge2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ridge2.setAttribute('x1', '115');
      ridge2.setAttribute('y1', '330');
      ridge2.setAttribute('x2', '115');
      ridge2.setAttribute('y2', '375');
      ridge2.setAttribute('stroke', '#555');
      ridge2.setAttribute('stroke-width', '2');
      hiltEl.appendChild(ridge2);
      break;
  }
}

function renderDualWieldHilt(hiltEl) {
  // Dual wield uses the standard hilt (right hand) - left saber doesn't have a hilt on screen
  switch (saber.hilt) {
    case 'classic':
      renderClassicHilt(hiltEl);
      break;
    case 'sleek':
      renderSleekHilt(hiltEl);
      break;
    case 'ornate':
      renderOrnateHilt(hiltEl);
      break;
    case 'rugged':
      renderRuggedHilt(hiltEl);
      break;
  }
}

function updateInfo() {
  const label = getSaberLabel();
  document.getElementById('saberInfo').textContent = label;
  document.getElementById('configSummary').textContent = label;
}

function getSaberLabel() {
  const typeLabels = {
    single: 'Single Blade',
    saberstaff: 'Saberstaff',
    pike: 'Pike',
    dualwield: 'Dual Wield',
    shoto: 'Shoto',
    crossguard: 'Crossguard',
    lightwhip: 'Lightwhip'
  };

  const hiltLabels = {
    classic: 'Classic Hilt',
    sleek: 'Sleek Hilt',
    ornate: 'Ornate Hilt',
    rugged: 'Rugged Hilt'
  };

  return `${typeLabels[saber.type]} • ${COLORS[saber.color].label} Crystal • ${hiltLabels[saber.hilt]}`;
}
