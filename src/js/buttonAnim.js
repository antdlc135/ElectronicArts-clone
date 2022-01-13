export function buttonSubmit() {
  let mainButton = document.querySelectorAll(".mainButton");

  mainButton.forEach((el) => {
    el.onmouseover = () => {
      el.lastElementChild.style.transform = "scale(1.1)";
      el.onmouseout = () => {
        el.lastElementChild.style.transform = "inherit";
      };
    };
  });
}
export function startButtonAnim() {
  document.addEventListener("DOMContentLoaded", buttonSubmit);
}
