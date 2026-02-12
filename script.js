const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");
const buttons = document.getElementById("buttons");
const question = document.getElementById("question");

function moveNoButton() {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  question.style.display = "none";
  result.classList.remove("hidden");
});
