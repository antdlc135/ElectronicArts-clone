export function cardAnim() {
  let btn = document.querySelectorAll(".mainBody .title");
  btn.forEach((el) => {
    el.onmouseover = () => {
      el.previousElementSibling.style.opacity = 1;
      el.firstElementChild.style.transform = "translate(0, -50px)";
      el.onmouseout = () => {
        el.previousElementSibling.style.opacity = 0;
        el.firstElementChild.style.transform = "translate(0, 0)";
      };
    };
  });

  let card = document.querySelectorAll(".tab");
  card.forEach((el) => {
    el.onmouseover = () => {
      el.style.setProperty("--opacity", 1);
      el.style.transform = "translate(0, -10px)";
      el.onmouseout = () => {
        el.style.setProperty("--opacity", 0);
        el.style.transform = "translate(0, 0)";
      };
    };
  });

  let btnAside = document.querySelectorAll("");
  btnAside.forEach((el) => {
    el.onmouseover = () => {
      el.onmouseout = () => {};
    };
  });
}

export function startCardAnim() {
  window.addEventListener("DOMContentLoaded", cardAnim);
}
