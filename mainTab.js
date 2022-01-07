
const removeTabs = () => {
    let tabs = document.querySelectorAll(".tabs button");
    let tabcontents = document.querySelectorAll(".maintab .cards");
    tabs.forEach(tab => {
        tab.classList.remove("is-active");
    });
tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove("is-active");
    });
}

const addActiveTab = tab => {
    tab.classList.add("is-active");
    const href = tab.querySelector("a").getAttribute("href");
    let matchingContent   = document.querySelector('[id="'+`${href}`+'"]');
    matchingContent.classList.add("is-active");


}

function openMainTab() {
    let tabs = document.querySelectorAll(".tabs button");

    tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      removeTabs();
      addActiveTab(tab);
      
    });  
});
}

window.addEventListener("DOMContentLoaded", openMainTab);
