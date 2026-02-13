const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");
const buttons = document.getElementById("buttons");
const question = document.getElementById("question");

let locked = false;
let placeholder = null;

function lockElementWithPlaceholder(el) {
  const rect = el.getBoundingClientRect();

  // Crear placeholder para mantener el layout
  placeholder = el.cloneNode(true);
  placeholder.classList.add("question-placeholder");
  el.parentNode.insertBefore(placeholder, el.nextSibling);

  // Fijar el elemento real
  el.style.position = "fixed";
  el.style.left = `${rect.left}px`;
  el.style.top = `${rect.top}px`;
  el.style.width = `${rect.width}px`;
  el.style.height = `${rect.height}px`;
  el.style.margin = "0";
}

function lockYesButton(el) {
  const rect = el.getBoundingClientRect();

  el.style.position = "fixed";
  el.style.left = `${rect.left}px`;
  el.style.top = `${rect.top}px`;
  el.style.width = `${rect.width}px`;
  el.style.height = `${rect.height}px`;
}

function lockLayout() {
  if (locked) return;
  locked = true;

  lockElementWithPlaceholder(question);
  lockYesButton(yesBtn);
}

function moveNoButton() {
  lockLayout();

  const btnRect = noBtn.getBoundingClientRect();
  const padding = 20;

  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  question.style.display = "none";
  if (placeholder) placeholder.style.display = "none";
  result.classList.remove("hidden");
});
