export function mainBodyNav() {
  let btn = document.querySelectorAll(".mainNavButt> .cover");
  let cardsSheet = [];
  document.querySelectorAll(".cards>section").forEach((el) => {
    cardsSheet.push(el);
  });
  let check = btn[0];

  function decolorButttons() {
    btn.forEach((el) => {
      el.parentElement.classList.remove("mainNavBackground");
      el.nextElementSibling.firstElementChild.style.borderBottom = "0";
    });
    cardsSheet.forEach((cards) => {
      cards.style.display = "none";
    });
  }
  decolorButttons();

  check.parentElement.classList.add("mainNavBackground");
  check.nextElementSibling.firstElementChild.style.borderBottom =
    "3px solid var(--main-colour)";
  let firstCards = cardsSheet.find(
    (el) => el.dataset.info === check.dataset.info
  );
  firstCards.style.display = "grid";

  btn.forEach((el) => {
    el.onclick = () => {
      decolorButttons();
      el.parentElement.classList.add("mainNavBackground");
      el.nextElementSibling.firstElementChild.style.borderBottom =
        "3px solid var(--main-colour)";
      let cards = cardsSheet.find(
        (elem) => elem.dataset.info === el.dataset.info
      );
      cards.style.display = "grid";
      check = ev.target;
    };
    el.onmouseover = () => {
      el.parentElement.classList.add("mainNavBackground");
    };
    el.onmouseout = (ev) => {
      if (check === ev.target) {
        el.parentElement.classList.add("mainNavBackground");
      } else {
        el.parentElement.classList.remove("mainNavBackground");
      }
    };
  });
}
