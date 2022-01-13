export function mainBodyNav() {
  let btn = document.querySelectorAll(".mainNavButt");

  btn.forEach((el) => {
    el.onmouseover = () => {
      el.firstElementChild.style.color = "#676767";
      el.style.backgroundColor = "#dedede";
      el.onmouseout = () => {
        el.firstElementChild.style.color = "#070707";
        el.style.backgroundColor = "unset";
      };
    };
    el.onclick = () => {
      el.firstElementChild.style.color = "#676767";
      el.style.backgroundColor = "#dedede";
      el.onclick = () => {
        el.firstElementChild.style.color = "#070707";
        el.style.backgroundColor = "unset";
      };
    };
  });
}

export function startMainBodyNavAnim() {
  window.addEventListener("DOMContentLoaded", mainBodyNav);
}
