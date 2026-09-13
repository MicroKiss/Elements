// Elements 1-54 with Bohr-model electron shell distribution (K, L, M, N, O...)
const ELEMENTS = [
  { number: 1, symbol: "H", name: "Hydrogen", shells: [1] },
  { number: 2, symbol: "He", name: "Helium", shells: [2] },
  { number: 3, symbol: "Li", name: "Lithium", shells: [2, 1] },
  { number: 4, symbol: "Be", name: "Beryllium", shells: [2, 2] },
  { number: 5, symbol: "B", name: "Boron", shells: [2, 3] },
  { number: 6, symbol: "C", name: "Carbon", shells: [2, 4] },
  { number: 7, symbol: "N", name: "Nitrogen", shells: [2, 5] },
  { number: 8, symbol: "O", name: "Oxygen", shells: [2, 6] },
  { number: 9, symbol: "F", name: "Fluorine", shells: [2, 7] },
  { number: 10, symbol: "Ne", name: "Neon", shells: [2, 8] },
  { number: 11, symbol: "Na", name: "Sodium", shells: [2, 8, 1] },
  { number: 12, symbol: "Mg", name: "Magnesium", shells: [2, 8, 2] },
  { number: 13, symbol: "Al", name: "Aluminium", shells: [2, 8, 3] },
  { number: 14, symbol: "Si", name: "Silicon", shells: [2, 8, 4] },
  { number: 15, symbol: "P", name: "Phosphorus", shells: [2, 8, 5] },
  { number: 16, symbol: "S", name: "Sulfur", shells: [2, 8, 6] },
  { number: 17, symbol: "Cl", name: "Chlorine", shells: [2, 8, 7] },
  { number: 18, symbol: "Ar", name: "Argon", shells: [2, 8, 8] },
  { number: 19, symbol: "K", name: "Potassium", shells: [2, 8, 8, 1] },
  { number: 20, symbol: "Ca", name: "Calcium", shells: [2, 8, 8, 2] },
  { number: 21, symbol: "Sc", name: "Scandium", shells: [2, 8, 9, 2] },
  { number: 22, symbol: "Ti", name: "Titanium", shells: [2, 8, 10, 2] },
  { number: 23, symbol: "V", name: "Vanadium", shells: [2, 8, 11, 2] },
  { number: 24, symbol: "Cr", name: "Chromium", shells: [2, 8, 13, 1] },
  { number: 25, symbol: "Mn", name: "Manganese", shells: [2, 8, 13, 2] },
  { number: 26, symbol: "Fe", name: "Iron", shells: [2, 8, 14, 2] },
  { number: 27, symbol: "Co", name: "Cobalt", shells: [2, 8, 15, 2] },
  { number: 28, symbol: "Ni", name: "Nickel", shells: [2, 8, 16, 2] },
  { number: 29, symbol: "Cu", name: "Copper", shells: [2, 8, 18, 1] },
  { number: 30, symbol: "Zn", name: "Zinc", shells: [2, 8, 18, 2] },
  { number: 31, symbol: "Ga", name: "Gallium", shells: [2, 8, 18, 3] },
  { number: 32, symbol: "Ge", name: "Germanium", shells: [2, 8, 18, 4] },
  { number: 33, symbol: "As", name: "Arsenic", shells: [2, 8, 18, 5] },
  { number: 34, symbol: "Se", name: "Selenium", shells: [2, 8, 18, 6] },
  { number: 35, symbol: "Br", name: "Bromine", shells: [2, 8, 18, 7] },
  { number: 36, symbol: "Kr", name: "Krypton", shells: [2, 8, 18, 8] },
  { number: 37, symbol: "Rb", name: "Rubidium", shells: [2, 8, 18, 8, 1] },
  { number: 38, symbol: "Sr", name: "Strontium", shells: [2, 8, 18, 8, 2] },
  { number: 39, symbol: "Y", name: "Yttrium", shells: [2, 8, 18, 9, 2] },
  { number: 40, symbol: "Zr", name: "Zirconium", shells: [2, 8, 18, 10, 2] },
  { number: 41, symbol: "Nb", name: "Niobium", shells: [2, 8, 18, 12, 1] },
  { number: 42, symbol: "Mo", name: "Molybdenum", shells: [2, 8, 18, 13, 1] },
  { number: 43, symbol: "Tc", name: "Technetium", shells: [2, 8, 18, 13, 2] },
  { number: 44, symbol: "Ru", name: "Ruthenium", shells: [2, 8, 18, 15, 1] },
  { number: 45, symbol: "Rh", name: "Rhodium", shells: [2, 8, 18, 16, 1] },
  { number: 46, symbol: "Pd", name: "Palladium", shells: [2, 8, 18, 18] },
  { number: 47, symbol: "Ag", name: "Silver", shells: [2, 8, 18, 18, 1] },
  { number: 48, symbol: "Cd", name: "Cadmium", shells: [2, 8, 18, 18, 2] },
  { number: 49, symbol: "In", name: "Indium", shells: [2, 8, 18, 18, 3] },
  { number: 50, symbol: "Sn", name: "Tin", shells: [2, 8, 18, 18, 4] },
  { number: 51, symbol: "Sb", name: "Antimony", shells: [2, 8, 18, 18, 5] },
  { number: 52, symbol: "Te", name: "Tellurium", shells: [2, 8, 18, 18, 6] },
  { number: 53, symbol: "I", name: "Iodine", shells: [2, 8, 18, 18, 7] },
  { number: 54, symbol: "Xe", name: "Xenon", shells: [2, 8, 18, 18, 8] },
];

const SHELL_CAPACITY = [2, 8, 18, 32, 32];

const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const skipBtn = document.getElementById("skipBtn");
const revealBtn = document.getElementById("revealBtn");
const gameTab = document.getElementById("gameTab");
const settingsTab = document.getElementById("settingsTab");
const gamePanel = document.getElementById("gamePanel");
const settingsPanel = document.getElementById("settingsPanel");
const rowCount = document.getElementById("rowCount");

const ROW_END_ATOMIC_NUMBERS = [2, 10, 18, 36, 54];
const savedRowCount = Number.parseInt(localStorage.getItem("elementRowCount"), 10);

const state = {
  current: null,
  score: 0,
  attempts: 0,
  revealed: false,
  shellAngles: [],
  rowCount: savedRowCount >= 1 && savedRowCount <= 5 ? savedRowCount : 5,
};

function pickElement(excludeNumber) {
  const availableElements = ELEMENTS.slice(0, ROW_END_ATOMIC_NUMBERS[state.rowCount - 1]);
  let el;
  do {
    el = availableElements[Math.floor(Math.random() * availableElements.length)];
  } while (availableElements.length > 1 && excludeNumber === el.number);
  return el;
}

function newRound() {
  state.current = pickElement(state.current ? state.current.number : null);
  state.revealed = false;
  state.shellAngles = state.current.shells.map(() => Math.random() * Math.PI * 2);
  feedback.textContent = "";
  feedback.className = "feedback";
  guessInput.value = "";
  guessInput.focus();
}

function drawAtom() {
  const el = state.current;
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;

  ctx.clearRect(0, 0, w, h);

  const baseRadius = 34;
  const shellGap = (Math.min(w, h) / 2 - baseRadius - 20) / Math.max(el.shells.length, 1);

  // nucleus
  const nucleusRadius = 16;
  const gradient = ctx.createRadialGradient(cx, cy, 2, cx, cy, nucleusRadius);
  gradient.addColorStop(0, "#ffdf8a");
  gradient.addColorStop(1, "#e0762f");
  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
  ctx.fill();

  el.shells.forEach((count, i) => {
    const radius = baseRadius + i * shellGap;

    // orbit ring
    ctx.beginPath();
    ctx.strokeStyle = "rgba(120, 150, 220, 0.35)";
    ctx.lineWidth = 1;
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    // electrons as points around the ring
    const angleOffset = state.shellAngles[i];
    for (let e = 0; e < count; e++) {
      const angle = angleOffset + (e / count) * Math.PI * 2;
      const ex = cx + radius * Math.cos(angle);
      const ey = cy + radius * Math.sin(angle);

      ctx.beginPath();
      ctx.fillStyle = "#5ec8ff";
      ctx.shadowColor = "#5ec8ff";
      ctx.shadowBlur = 6;
      ctx.arc(ex, ey, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  });
}

function animate() {
  const el = state.current;
  el.shells.forEach((count, i) => {
    // inner shells spin faster than outer ones
    const speed = 0.006 / (i + 1);
    state.shellAngles[i] += speed;
  });
  drawAtom();
  requestAnimationFrame(animate);
}

function normalize(str) {
  return str.trim().toLowerCase();
}

function checkGuess(raw) {
  const guess = normalize(raw);
  if (!guess) return;

  const el = state.current;
  const isCorrect = guess === normalize(el.name) || guess === normalize(el.symbol);

  state.attempts++;

  if (isCorrect) {
    state.score++;
    feedback.textContent = `Correct! It was ${el.name} (${el.symbol}).`;
    feedback.className = "feedback correct";
    updateScore();
    setTimeout(newRound, 1200);
  } else {
    feedback.textContent = "Not quite, try again.";
    feedback.className = "feedback wrong";
    updateScore();
  }
}

function updateScore() {
  scoreEl.textContent = `Score: ${state.score} / ${state.attempts}`;
}

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (state.revealed) return;
  checkGuess(guessInput.value);
});

skipBtn.addEventListener("click", () => {
  newRound();
});

revealBtn.addEventListener("click", () => {
  const el = state.current;
  feedback.textContent = `Answer: ${el.name} (${el.symbol})`;
  feedback.className = "feedback info";
  state.revealed = true;
});

function showTab(activeTab) {
  const showGame = activeTab === gameTab;
  gamePanel.hidden = !showGame;
  settingsPanel.hidden = showGame;
  gameTab.classList.toggle("active", showGame);
  settingsTab.classList.toggle("active", !showGame);
  gameTab.setAttribute("aria-selected", String(showGame));
  settingsTab.setAttribute("aria-selected", String(!showGame));

  if (showGame) guessInput.focus();
}

gameTab.addEventListener("click", () => showTab(gameTab));
settingsTab.addEventListener("click", () => showTab(settingsTab));

rowCount.value = String(state.rowCount);
rowCount.addEventListener("change", () => {
  state.rowCount = Number.parseInt(rowCount.value, 10);
  localStorage.setItem("elementRowCount", String(state.rowCount));
  newRound();
});

newRound();
animate();
