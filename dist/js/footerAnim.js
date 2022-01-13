function footerAnim() {
  let onclickSelection = document.querySelector(".onclick-selection");
  let selection = document.querySelector(".selection");
  let selectionContainer = document.querySelector(".selection-container");
  let arrow = document.querySelector("#down-arrow");
  let body = document.querySelector("body");
  let allFlags = document.querySelectorAll(".flag");
  let defaultCheck = document.getElementById("default-check");
  const languages = document.querySelectorAll(".flag");
  let selected = document.querySelector(".selected");
  let socialIcons = document.querySelectorAll(".social-icons > svg");
  let selectedName = document.querySelector(".selected span");
  let selectedFlag = document.querySelector(".selected img");
  let langMobileBorder = document.querySelector(".lang-mobile-border");
  let langMobileSelect = document.querySelector(".lang-mobile-select");
  let langMobileOptions = document.querySelectorAll(".lang-mobile-options");
  let langMobileSpan = document.querySelector(".lang-mobile-span");
  let langMobileFlag = document.querySelector(".lang-mobile-flag");

  langMobileSelect.onmouseover = () => {
    langMobileBorder.style.transform = "scale(1.03)";
    langMobileBorder.style.transition = "400ms";
  };
  langMobileSelect.onmouseout = () => {
    langMobileBorder.style.transform = "scale(1)";
  };
  selectionContainer.onmouseover = () => {
    selection.style.transform = "scale(1.1)";
  };
  selectionContainer.onmouseout = () => {
    selection.style.transform = "scale(1)";
  };
  selection.onclick = () => {
    selection.style.transform = "scale(1.1)";
    document.addEventListener("click", (event) => {
      if (event.target != selectionContainer) {
        onclickSelection.style.visibility = "hidden";
        defaultCheck.style.visibility = "hidden";
        selected.style.boxShadow = "none";
        arrow.style.transform = "rotateX(0)";
        selectionContainer.style.borderTop = "2px solid rgb(194, 194, 194)";
      }
    });
    if (onclickSelection.style.visibility == "visible") {
      defaultCheck.style.visibility = "hidden";
      selected.style.boxShadow = "none";
      onclickSelection.style.visibility = "hidden";
      arrow.style.transform = "rotateX(0)";
      selectionContainer.style.borderTop = "2px solid rgb(194, 194, 194)";
    } else {
      arrow.style.transform = "rotateX(180deg)";
      defaultCheck.style.visibility = "visible";
      onclickSelection.style.visibility = "visible";
      selected.style.boxShadow = "0 14px 20px 0 rgba(0, 0, 0, 0.16)";
      selectionContainer.style.borderTop = "#f3f3f3";
    }
  };
  let checked;
  for (let flag of allFlags) {
    flag.addEventListener("click", () => {
      if (!checked) {
        checked = document.createElement("img");
        checked.setAttribute(
          "src",
          "/dist/assets/footer/bottomFooter/check.png"
        );
        checked.setAttribute("width", "18px");
        checked.setAttribute("height", "18px");
        checked.setAttribute("float", "right");
        defaultCheck.style.display = "none";
        flag.append(checked);
      } else {
        checked.remove();
        checked = document.createElement("img");
        checked.setAttribute(
          "src",
          "/dist/assets/footer/bottomFooter/check.png"
        );
        checked.setAttribute("width", "18px");
        checked.setAttribute("height", "18px");
        checked.setAttribute("float", "right");
        flag.append(checked);
        defaultCheck.style.display = "none";
      }
    });
  }
  //Google Translate
  languages.forEach((language) => {
    language.onclick = () => {
      selectedName.innerHTML = language.dataset.span;
      langMobileSpan.innerText = language.dataset.span;
      selectedFlag.src = language.dataset.img;
      langMobileFlag.src = language.dataset.img;
      selectedFlag.style.width = "20px";
      selectedFlag.style.height = "11px";
      let googleSelect = document.querySelector(
        "#google_translate_element select"
      );
      for (let i = 0; i < googleSelect.children.length; i++) {
        let option = googleSelect.children[i];
        if (option.value == language.id) {
          googleSelect.selectedIndex = i;
          googleSelect.dispatchEvent(new Event("change"));
          break;
        }
      }
    };
  });

  //Google Translate Mobile
  langMobileOptions.forEach((option, index) => {
    langMobileSelect.addEventListener("change", (event) => {
      if (index == event.target.selectedIndex) {
        langMobileSpan.innerText = option.innerText;
        selectedName.innerHTML = option.innerText;
        langMobileFlag.src = option.dataset.img;
        selectedFlag.src = option.dataset.img;
      }
      let googleSelect = document.querySelector(
        "#google_translate_element select"
      );
      for (let i = 0; i < googleSelect.children.length; i++) {
        let option = googleSelect.children[i];
        if (option.value == event.target.value) {
          googleSelect.selectedIndex = i;
          googleSelect.dispatchEvent(new Event("change"));
          break;
        }
      }
    }); // selectedName.innerHTML = language.dataset.span;
    // selectedFlag.src = language.dataset.img;
    // selectedFlag.style.width = "25px";
    // selectedFlag.style.height = "15px";
  });
}

document.addEventListener("DOMContentLoaded", footerAnim);
