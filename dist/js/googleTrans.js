async function lib0() {
  let script = document.createElement("script");
  script.type = "text/javascript";
  document.head.append(script);
  await fetch(
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  )
    .then((par) => {
      par.json();
    })
    .then((par) => {
      console.log(par);
    });
}

window.addEventListener("DOMContentLoaded", lib0);
