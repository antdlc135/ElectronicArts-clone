function threeDots() {
  let circleSup = document.querySelector(".circlesSuperPosition");
  let circle = document.querySelectorAll(".nav-circle");
  let std = circleSup.firstElementChild;
  let big = std.nextElementSibling;
  let aside = document.querySelector(".toBackGround > .aside");
  let blackBack = document.querySelector(".blackBack");
  let close = document.querySelector(".close");
  let closeRed = document.querySelector("[src*=close-red]");

  console.log(closeRed);
  circleSup.onmouseover = () => {
    std.style.opacity = 0;
    big.style.opacity = 1;
    circle.forEach((element) => {
      element.style.backgroundColor = "var(--main-colour)";
    });
  };
  circleSup.onmouseout = () => {
    std.style.opacity = 1;
    big.style.opacity = 0;
    circle.forEach((element) => {
      element.style.backgroundColor = "black";
    });
  };
  circleSup.onclick = () => {
    blackBack.style.zIndex = 8;
    aside.style.zIndex = 9;
    blackBack.onclick = () => {
      aside.style.zIndex = -1;
      blackBack.style.zIndex = -1;
    };
  };

  close.onmouseover = () => {
    closeRed.style.opacity = 1;
    closeRed.previousElementSibling.style.opacity = 0;
  };
  close.onmouseout = () => {
    closeRed.style.opacity = 0;
    closeRed.previousElementSibling.style.opacity = 1;
  };
  close.onclick = () => {
    aside.style.zIndex = -1;
    blackBack.style.zIndex = -1;
  };
}

window.addEventListener("DOMContentLoaded", threeDots);