window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
function removetransition(e) {
  console.log("hey");
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((x) => x.addEventListener("transitionend", removetransition));
