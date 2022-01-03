let onclickSelection = document.querySelector(".onclick-selection");
let selection = document.querySelector(".selection");
let arrow = document.querySelector("#down-arrow");

function formButt() {
  selection.onclick = () => {
    onclickSelection.style.visibility = "visible";
    selection.onclick = () => {
      if (onclickSelection.style.visibility === "visible") {
        onclickSelection.style.visibility = "hidden";
      }
    };
  };
}

window.addEventListener("DOMContentLoaded", formButt);
