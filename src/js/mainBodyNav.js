export function mainBodyNav() {
  let btn = document.querySelectorAll(".mainNavButt");

  let unClickAll = () => {
    btn.forEach((el) => {
      el.firstElementChild.style.color = "inherit";
      el.style.backgroundColor = "transparent";
    });
  };

  btn.forEach((el) => {
    el.onclick = () => {
      unClickAll();
      el.firstElementChild.style.color = "#676767";
      el.style.backgroundColor = "#dedede";
    };
  });
}
