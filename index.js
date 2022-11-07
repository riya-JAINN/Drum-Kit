var set = document.querySelector(".set");
const check = (input) => {
  switch (input) {
    case "w":
      var audio = new Audio("/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("/sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("/sounds/snare.mp3");
      audio.play();
      break;
  }
};
set.addEventListener("click", (e) => {
  e.target.classList.add("pressed");
  setTimeout(() => {
    e.target.classList.remove("pressed");
  }, 100);
  check(e.target.classList[0]);
});
document.addEventListener("keyup", (e) => {
  document.querySelector(`.${e.key}`).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(`.${e.key}`).classList.remove("pressed");
  }, 100);
  check(e.key);
});
