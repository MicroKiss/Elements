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
const periodicTable = document.getElementById("periodicTable");
const selectionCount = document.getElementById("selectionCount");
const selectionMessage = document.getElementById("selectionMessage");
const blindPeriodicTable = document.getElementById("blindPeriodicTable");

const ROW_END_ATOMIC_NUMBERS = [2, 10, 18, 36, 54];
const savedRowCount = Number.parseInt(localStorage.getItem("elementRowCount"), 10);
const PERIODS = [
  [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
  [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
  [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
  Array.from({ length: 18 }, (_, index) => index + 19),
  Array.from({ length: 18 }, (_, index) => index + 37),
];

function loadSelectedElements() {
  try {
    const saved = JSON.parse(localStorage.getItem("selectedElements"));
    const valid = saved.filter((number) => Number.isInteger(number) && number >= 1 && number <= ELEMENTS.length);
    if (valid.length) return new Set(valid);
  } catch {
    // Fall back to the previous row setting or all available elements.
  }

  const rowLimit = savedRowCount >= 1 && savedRowCount <= 5 ? ROW_END_ATOMIC_NUMBERS[savedRowCount - 1] : ELEMENTS.length;
  return new Set(ELEMENTS.slice(0, rowLimit).map((element) => element.number));
}

const state = {
  current: null,
  score: 0,
  attempts: 0,
  revealed: false,
  completed: false,
  shellAngles: [],
  selectedElements: loadSelectedElements(),
};

function pickElement(excludeNumber) {
  const availableElements = ELEMENTS.filter((element) => state.selectedElements.has(element.number));
  let el;
  do {
    el = availableElements[Math.floor(Math.random() * availableElements.length)];
  } while (availableElements.length > 1 && excludeNumber === el.number);
  return el;
}

function newRound() {
  state.current = pickElement(state.current ? state.current.number : null);
  state.revealed = false;
  state.completed = false;
  state.shellAngles = state.current.shells.map(() => Math.random() * Math.PI * 2);
  feedback.textContent = "";
  feedback.className = "feedback";
  guessInput.value = "";
  blindPeriodicTable.querySelectorAll("button").forEach((button) => {
    button.classList.remove("wrong", "correct", "revealed");
    button.disabled = false;
  });
  if (!gamePanel.hidden) guessInput.focus();
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

function recordGuess(isCorrect) {
  const el = state.current;
  state.attempts++;

  if (isCorrect) {
    state.score++;
    state.completed = true;
    blindPeriodicTable.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
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

function checkGuess(raw) {
  const guess = normalize(raw);
  if (!guess) return;

  const el = state.current;
  recordGuess(guess === normalize(el.name) || guess === normalize(el.symbol));
}

function updateScore() {
  scoreEl.textContent = `Score: ${state.score} / ${state.attempts}`;
}

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (state.revealed || state.completed) return;
  checkGuess(guessInput.value);
});

blindPeriodicTable.addEventListener("click", (event) => {
  const tile = event.target.closest("button[data-number]");
  if (!tile || state.revealed || state.completed) return;

  const isCorrect = Number(tile.dataset.number) === state.current.number;
  tile.classList.add(isCorrect ? "correct" : "wrong");
  recordGuess(isCorrect);
});

skipBtn.addEventListener("click", () => {
  newRound();
});

revealBtn.addEventListener("click", () => {
  const el = state.current;
  feedback.textContent = `Answer: ${el.name} (${el.symbol})`;
  feedback.className = "feedback info";
  state.revealed = true;
  const answerTile = blindPeriodicTable.querySelector(`[data-number="${el.number}"]`);
  answerTile.classList.add("revealed");
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

function createToggle(label, className, numbers) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.dataset.elements = numbers.join(",");
  return button;
}

function renderBlindPeriodicTable() {
  blindPeriodicTable.replaceChildren();
  PERIODS.forEach((period, periodIndex) => {
    period.forEach((atomicNumber, groupIndex) => {
      if (!atomicNumber) {
        const gap = document.createElement("span");
        gap.className = "blind-gap";
        blindPeriodicTable.append(gap);
        return;
      }

      const tile = document.createElement("button");
      tile.type = "button";
      tile.dataset.number = atomicNumber;
      tile.setAttribute("aria-label", `Period ${periodIndex + 1}, group ${groupIndex + 1}`);
      blindPeriodicTable.append(tile);
    });
  });
}

function renderPeriodicTable() {
  periodicTable.replaceChildren();
  periodicTable.append(createToggle("", "table-corner", []));

  for (let group = 1; group <= 18; group++) {
    const groupNumbers = PERIODS.map((period) => period[group - 1]).filter(Boolean);
    const toggle = createToggle(String(group), "group-toggle", groupNumbers);
    toggle.title = `Toggle group ${group}`;
    toggle.setAttribute("aria-label", `Toggle group ${group}`);
    periodicTable.append(toggle);
  }

  PERIODS.forEach((period, periodIndex) => {
    const periodNumbers = period.filter(Boolean);
    const periodToggle = createToggle(String(periodIndex + 1), "period-toggle", periodNumbers);
    periodToggle.title = `Toggle period ${periodIndex + 1}`;
    periodToggle.setAttribute("aria-label", `Toggle period ${periodIndex + 1}`);
    periodicTable.append(periodToggle);

    period.forEach((atomicNumber) => {
      if (!atomicNumber) {
        const gap = document.createElement("span");
        gap.className = "element-gap";
        periodicTable.append(gap);
        return;
      }

      const element = ELEMENTS[atomicNumber - 1];
      const tile = createToggle(element.symbol, "element-toggle", [atomicNumber]);
      tile.title = element.name;
      tile.setAttribute("aria-label", `${element.name}, atomic number ${atomicNumber}`);
      const number = document.createElement("span");
      number.textContent = atomicNumber;
      const symbol = document.createElement("strong");
      symbol.textContent = element.symbol;
      tile.replaceChildren(number, symbol);
      periodicTable.append(tile);
    });
  });

  updatePeriodicTable();
}

function updatePeriodicTable() {
  periodicTable.querySelectorAll("button[data-elements]").forEach((button) => {
    const numbers = button.dataset.elements.split(",").filter(Boolean).map(Number);
    const selected = numbers.filter((number) => state.selectedElements.has(number)).length;
    button.classList.toggle("selected", selected === numbers.length);
    button.classList.toggle("partial", selected > 0 && selected < numbers.length);
    button.setAttribute("aria-pressed", String(selected === numbers.length));
  });
  selectionCount.textContent = `${state.selectedElements.size} of ${ELEMENTS.length} selected`;
}

periodicTable.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-elements]");
  if (!button) return;

  const numbers = button.dataset.elements.split(",").map(Number);
  const allSelected = numbers.every((number) => state.selectedElements.has(number));
  const selectedInGroup = numbers.filter((number) => state.selectedElements.has(number)).length;

  if (allSelected && state.selectedElements.size === selectedInGroup) {
    selectionMessage.textContent = "At least one element must remain selected.";
    return;
  }

  numbers.forEach((number) => {
    if (allSelected) state.selectedElements.delete(number);
    else state.selectedElements.add(number);
  });
  selectionMessage.textContent = "";
  localStorage.setItem("selectedElements", JSON.stringify([...state.selectedElements]));
  updatePeriodicTable();
  newRound();
});

renderPeriodicTable();
renderBlindPeriodicTable();
newRound();
animate();
