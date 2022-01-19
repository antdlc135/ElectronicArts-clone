export function mainBodyNav() {
  let btn = document.querySelectorAll(".mainNavButt> .cover");
  let cardsSheets = [];
  document.querySelectorAll(".cards>section").forEach((el) => {
    cardsSheets.push(el);
  });
  let check = btn[0];

  function decolorButttons() {
    btn.forEach((el) => {
      el.parentElement.classList.remove("mainNavBackground");
      el.nextElementSibling.firstElementChild.style.borderBottom = "0";
    });
    cardsSheets.forEach((sheet) => {
      sheet.style.display = "none";
    });
  }

  decolorButttons();

  function onclickAndDefault(el) {
    decolorButttons();
    el.parentElement.classList.add("mainNavBackground");
    el.nextElementSibling.firstElementChild.style.borderBottom =
      "3px solid var(--main-colour)";
    let sheet = cardsSheets.find(
      (elem) => elem.dataset.info === el.dataset.info
    );
    let sheetCards = sheet.children;
    for (let i = 0; i < sheetCards.length; i++) {
      sheetCards[i].style.transform = "translateY(-10px)";
      sheetCards[i].style.setProperty("--opacity", 1);
    }
    sheet.style.display = "grid";
    setTimeout(() => {
      for (let i = 0; i < sheetCards.length; i++) {
        sheetCards[i].style.transform = "translateY(0)";
        sheetCards[i].style.setProperty("--opacity", 0);
      }
    }, 200);
    check = el;
  }

  onclickAndDefault(check);

  btn.forEach((el) => {
    el.onclick = () => {
      if (check !== el) {
        onclickAndDefault(el);
      }
    };
    el.onmouseover = () => {
      el.parentElement.classList.add("mainNavBackground");
    };
    el.onmouseout = () => {
      if (check === el) {
        el.parentElement.classList.add("mainNavBackground");
      } else {
        el.parentElement.classList.remove("mainNavBackground");
      }
    };
  });
}
