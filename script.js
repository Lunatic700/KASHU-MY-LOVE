let noClicks = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const heart = document.querySelector(".heart");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.6;

let started = false;

function startMusicAndHeart() {
  if (!started) {
    bgMusic.play();
    heart.classList.add("beat");
    started = true;
  }
}

noBtn.addEventListener("click", () => {
  startMusicAndHeart();
  noClicks++;

  question.innerText = "Are you sure, Kashu? 🥺";

  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size + 10 + "px";
  yesBtn.style.padding = "15px 40px";

  if (noClicks >= 2) {
    noBtn.style.display = "none";
    question.innerText = "There is only one right answer now 😌💖";
  }
});

yesBtn.addEventListener("click", () => {
  startMusicAndHeart();

  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("yesScreen").classList.remove("hidden");
});
