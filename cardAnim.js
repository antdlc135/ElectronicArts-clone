function cardAnim() {
  let card = document.querySelectorAll(".tab");
  card.forEach((el) => {
    el.onmouseover = () => {
      el.style.setProperty("--opacity", 1);
      el.style.transform = "translate(0, -15px)";
      el.onmouseout = () => {
        el.style.setProperty("--opacity", 0);
        el.style.transform = "translate(0, 0)";
      };
    };
  });
  let btn = document.querySelectorAll(".appendBackgr");
  btn.forEach((el) => {
    el.onmouseover = () => {
      el.style.background =
        "linear-gradient(to left, rgba(178, 55, 72, 90%), rgba(65, 31, 66, 90%)";
      el.onmouseout = () => {
        el.style.background = "transparent";
      };
    };
  });
  console.log(btn);
}

window.addEventListener("DOMContentLoaded", cardAnim);
