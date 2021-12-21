function threeDots() {
  let circleSup = document.querySelector(".circlesSuperPosition");
  let circle = document.querySelectorAll(".nav-circle");
  let std = circleSup.firstElementChild;
  let big = std.nextElementSibling;
  let aside = document.querySelector(".toBackGround > .aside");
  let blackBack = document.querySelector(".blackBack");
  let close = document.querySelector(".close");
  let closeRed = document.querySelector("[src*=close-red]");
  let header = document.querySelector("body> header");
  let nav = document.querySelector(".toBackGround > nav");
  let toBackGround = document.querySelector(".toBackGround");

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

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
      nav.style.top = "33px";
    } else {
      header.style.top = "-35px";
      nav.style.top = "-1px";
    }
    prevScrollPos = currentScrollPos;
  };
}

window.addEventListener("DOMContentLoaded", threeDots);
