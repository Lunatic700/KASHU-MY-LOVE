let noClicks = 0;
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let question = document.getElementById("question");

noBtn.addEventListener("click", () => {
  noClicks++;

  question.innerText = "Are you sure, Kashu? 🥺";

  let currentSize = parseFloat(
    window.getComputedStyle(yesBtn).fontSize
  );

  yesBtn.style.fontSize = currentSize + 10 + "px";
  yesBtn.style.padding = "15px 40px";

  if (noClicks >= 2) {
    noBtn.style.display = "none";
    question.innerText = "There is only one correct answer now 😌💖";
  }
});

yesBtn.addEventListener("click", () => {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("yesScreen").classList.remove("hidden");
});
