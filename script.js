let noClicks = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const heart = document.querySelector(".heart");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.7;

let started = false;

function startMusic() {
  if (!started) {
    bgMusic.play().catch(() => {});
    heart.classList.add("beat");
    started = true;
  }
}

// 🔥 Start music on ANY tap (mobile safe)
document.body.addEventListener("click", startMusic, { once: true });

noBtn.addEventListener("click", () => {
  startMusic();
  noClicks++;

  question.innerText = "Are you sure, Kashu? 🥺";

  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size + 10 + "px";
  yesBtn.style.padding = "18px 45px";

  if (noClicks >= 2) {
    noBtn.style.display = "none";
    question.innerText = "There is only one right answer now 😌💖";
  }
});

yesBtn.addEventListener("click", () => {
  startMusic();

  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("yesScreen").classList.remove("hidden");
});
