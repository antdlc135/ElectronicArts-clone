export function HeaderNav() {
  //footer
  let header = document.querySelector("body> header");
  let headerHeight = document.querySelector("body > header > .headerHeight");
  let headerSheets = document.querySelectorAll(
    "body > header > .headerHeight> section"
  );
  let closeHeader = document.querySelector(
    "body> header>.headerHeight>.closeHeader"
  );
  let accountSect = document.querySelector("#accountSect");
  let account = document.querySelector("#account");
  let help = document.querySelector("#help");
  let headerSVGa = document.querySelectorAll("header > section");
  let EA = document.querySelector("header > a");

  //nav
  let circleSup = window.document.querySelector(".circlesSuperPosition");
  let circle = document.querySelectorAll(".nav-circle");
  let std = circleSup.firstElementChild;
  let big = std.nextElementSibling;
  let aside = document.querySelector(".toBackGround > .aside");
  let blackBack = document.querySelector(".blackBack");
  let close = document.querySelector(".close-x");
  let closeRed = document.querySelector("[src*=close-red]");
  let nav = document.querySelector(".toBackGround > nav");
  let toBackGround = document.querySelector(".toBackGround");
  let divNavMenu = document.querySelectorAll("nav > .navMenu > div");
  let body = document.querySelector("body");
  let titleAside = document.querySelectorAll(".play .titleAside");

  // header
  EA.onmouseover = () => {
    EA.firstElementChild.setAttribute("fill", "#8B8B8B");
  };
  EA.onmouseout = () => {
    EA.firstElementChild.setAttribute("fill", "#5c5c5c");
  };

  let goDown = (el) => {
    el === accountSect
      ? (el.firstElementChild.style.opacity = 1)
      : (el.firstElementChild.nextElementSibling.style.opacity = 1);
    el.style.top = "50%";
  };
  let goUp = (el) => {
    el === accountSect
      ? (el.firstElementChild.style.opacity = 0)
      : (el.firstElementChild.nextElementSibling.style.opacity = 0);
    el.style.top = "-400px";
  };
  let goUpAll = () => {
    headerSheets.forEach((el) => {
      el.style.top = "-400px";
    });
  };

  let closeAll = () => {
    decolorHeadIcon();
    goUpAll();
    closeHeaderHeight();
  };

  let closeHeaderHeight = () => {
    headerHeight.firstElementChild.style.transition = "none";
    headerHeight.firstElementChild.style.opacity = 0;
    header.style.top = "0";
    nav.style.top = "33px";
    headerHeight.style.minHeight = 0;
    headerHeight.classList.remove("headerHeightShad");
    body.style.overflow = "scroll";
  };

  let openHeaderHeight = () => {
    headerHeight.firstElementChild.style.transition = "500ms";
    headerHeight.firstElementChild.style.opacity = 1;
    if (window.pageYOffset != 0) {
      header.style.top = "-35px";
      nav.style.top = "-1px";
    }
    headerHeight.style.minHeight = "25rem";
    headerHeight.classList.add("headerHeightShad");
    body.style.overflow = "hidden";
  };

  let decolorHeadIcon = () => {
    headerSVGa.forEach((el) => {
      el.firstElementChild.setAttribute("fill", "#9f9f9f");
    });
  };

  // header icon animation
  (function eachHeaderSVG() {
    headerSVGa.forEach((el) => {
      el.onclick = (ev) => {
        decolorHeadIcon();
        el.firstElementChild.setAttribute("fill", "#f3f3f3");
        openHeaderHeight();
        if (ev.target.id == account.id) {
          goDown(accountSect);
          goUp(helpSect);
        } else {
          goDown(helpSect);
          goUp(accountSect);
        }
        ev.target.onclick = () => {
          decolorHeadIcon();
          el.firstElementChild.setAttribute("fill", "#f3f3f3");
          if (
            (ev.target.id == account.id && accountSect.style.top == "50%") ||
            (ev.target.id == help.id && helpSect.style.top == "50%")
          ) {
            closeAll();
            return eachHeaderSVG();
          } else {
            if (ev.target.id == account.id) {
              goDown(accountSect);
              goUp(helpSect);
            } else {
              goDown(helpSect);
              goUp(accountSect);
            }
          }
        };
        toBackGround.onclick = () => {
          closeAll();
          return eachHeaderSVG();
        };
        closeHeader.onclick = () => {
          closeAll();
          return eachHeaderSVG();
        };
      };
    });
  })();

  // header-end

  titleAside.forEach((el) => {
    el.onmouseover = () => {
      el.firstElementChild.style.transform = "scale(1.2)";
    };
    el.onmouseout = () => {
      el.firstElementChild.style.transform = "unset";
    };
  });

  divNavMenu.forEach((el) => {
    el.onmouseover = () => {
      el.firstElementChild.nextElementSibling.style.transform = "rotateX(0)";
      el.firstElementChild.nextElementSibling.setAttribute("fill", "red");
      el.style.color = "var(--main-colour)";
      el.firstElementChild.firstElementChild.style.maxHeight = "320px";
      el.firstElementChild.firstElementChild
        .querySelectorAll("section")
        .forEach((element) => {
          element.style.opacity = "1";
          element.style.visibility = "visible";
        });
    };
  });
  divNavMenu.forEach((el) => {
    el.onmouseout = () => {
      el.firstElementChild.nextElementSibling.style.transform =
        "rotateX(180deg)";
      el.firstElementChild.nextElementSibling.setAttribute("fill", "intial");
      el.style.color = "initial";
      el.firstElementChild.firstElementChild.style.maxHeight = "0";
      el.firstElementChild.firstElementChild
        .querySelectorAll("section")
        .forEach((element) => {
          element.style.opacity = 0;
          element.style.visibility = "hidden";
        });
    };
  });

  circleSup.onmouseover = () => {
    std.style.opacity = 0;
    big.style.opacity = 1;
    circle.forEach((element) => {
      element.style.backgroundColor = "var(--main-colour)";
    });
  };
  circleSup.onmouseout = () => {
    std.style.opacity = 1;
    big.style.opacity = 0;
    circle.forEach((element) => {
      element.style.backgroundColor = "black";
    });
  };
  circleSup.onclick = () => {
    header.style.top = "0";
    nav.style.top = "33px";
    blackBack.style.zIndex = 8;
    aside.style.left = "0";
    aside.style.top = "0";
    body.style.overflow = "hidden";
    blackBack.onclick = () => {
      if (window.pageYOffset != 0) {
        header.style.top = "-35px";
        nav.style.top = "-1px";
      }
      aside.style.left = "-410px";
      aside.style.top = "-30px";
      blackBack.style.zIndex = -1;
      body.style.overflow = "scroll";
    };
  };

  close.onmouseover = () => {
    closeRed.style.opacity = 1;
    closeRed.previousElementSibling.style.opacity = 0;
  };
  close.onmouseout = () => {
    closeRed.style.opacity = 0;
    closeRed.previousElementSibling.style.opacity = 1;
  };
  close.onclick = () => {
    aside.style.left = "-410px";
    aside.style.top = "-30px";
    if (window.pageYOffset != 0) {
      header.style.top = "-35px";
      nav.style.top = "-1px";
    }
    blackBack.style.zIndex = -1;
    body.style.overflow = "scroll";
  };

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
      nav.style.top = "33px";
    } else {
      header.style.top = "-35px";
      nav.style.top = "-1px";
    }
    prevScrollPos = currentScrollPos;
  };
}
