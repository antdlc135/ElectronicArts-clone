export function cardAnim() {
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
  console.log(card);
}
