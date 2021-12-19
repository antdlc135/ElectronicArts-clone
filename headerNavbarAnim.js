function threeDots() {
  let dots = document.querySelectorAll(".nav-circle");
  let parent = dots[0].parentElement;
  parent.onmouseover = () => {
    dots.forEach((el) => {
      el.style.height = "7px";
      el.style.width = "7px";
      el.style.margin = "2px";
      el.style.setProperty("background-color", "red");
    });
  };
  parent.onmouseout = () => {
    dots.forEach((el) => {
      el.style.height = "6.5px";
      el.style.width = "6.5px";
      el.style.margin = "0.5px";
      el.style.setProperty("background-color", "black");
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
