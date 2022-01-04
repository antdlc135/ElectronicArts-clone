function footerAnim() {
  let onclickSelection = document.querySelector(".onclick-selection");
  let selection = document.querySelector("footer .selection");
  let arrow = document.querySelector("#down-arrow");
  let body = document.querySelector("body");
  let allFlags = document.querySelectorAll(".flag");
  let defaultCheck = document.getElementById("check");
  const languages = document.querySelectorAll(".flag");

  selection.onclick = () => {
    defaultCheck.style.visibility = "visible";
    if (onclickSelection.style.visibility == "visible") {
      onclickSelection.style.visibility = "hidden";
      arrow.style.transform = "rotateX(0)";
      selection.style.borderTop = "2px solid rgb(194, 194, 194)";
      defaultCheck.style.visibility = "hidden";
    } else {
      arrow.style.transform = "rotateX(180deg)";
      onclickSelection.style.visibility = "visible";
      selection.style.borderTop = "2px solid rgb(194, 194, 194, 0.1)";
    }
  };

  let checked;
  for (let flag of allFlags) {
    flag.addEventListener("click", () => {
      if (!checked) {
        checked = document.createElement("img");
        checked.setAttribute("src", "./assets/check.png");
        checked.setAttribute("width", "18px");
        checked.setAttribute("height", "18px");
        checked.setAttribute("float", "right");
        flag.append(checked);
        clicked = true;
        defaultCheck.style.visibility = "hidden";
      } else {
        checked.remove();
        checked = document.createElement("img");
        checked.setAttribute("src", "./assets/check.png");
        checked.setAttribute("width", "18px");
        checked.setAttribute("height", "18px");
        checked.setAttribute("float", "right");
        flag.append(checked);
        defaultCheck.style.visibility = "hidden";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", footerAnim);

console.log("ciao");
// window.addEventListener("DOMContentLoaded", () => {
//   let googleSelect = document.querySelector(".goog-te-combo");
//   let ru = document.querySelectorAll(".goog-te-combo > option");
//   console.log(ru);
//   languages.forEach((language) => {
//     language.onclick = () => {
//       googleSelect.addEventListener("click", () => {});
//     };
//   });
// });
