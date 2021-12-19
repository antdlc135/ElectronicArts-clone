function threeDots() {
  let circleSup = document.querySelector(".circlesSuperPosition");
  let circle = document.querySelectorAll(".nav-circle");
  let std = circleSup.firstElementChild;
  let big = std.nextElementSibling;
  console.log(circle);
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
  //   let blackBack = document.querySelector(".rgbaBackground-body");
  //   let dots = document.querySelector(".circles-nav");
  //   blackBack.onclick = () => {
  //     blackBack.style.seProerty("z-index", "");
  //     blackBack.onclick = () => {
  //       blackBack.style.seProerty("z-index", "0");
  //     };
  //   };
}

window.addEventListener("DOMContentLoaded", threeDots);
