function footerAnim() {
    let onclickSelection = document.querySelector(".onclick-selection");
    let selection = document.querySelector(".selection");
    let selectionContainer = document.querySelector(".selection-container");
    let arrow = document.querySelector("#down-arrow");
    let body = document.querySelector("body");
    let allFlags = document.querySelectorAll(".flag");
    let defaultCheck = document.getElementById("default-check");
    const languages = document.querySelectorAll('.flag');
    let selected = document.querySelector(".selected")
    let socialIcons = document.querySelectorAll(".social-icons > svg");
    let selectedName = document.querySelector(".selected span");
    let selectedFlag = document.querySelector(".selected img");

    selectionContainer.onmouseover = ()=>{
        selection.style.transform = "scale(1.1)";
    }
    selectionContainer.onmouseout = ()=>{
        selection.style.transform = "scale(1)";
    }


    
    selection.onclick = ()=>{
        selection.style.transform = "scale(1.1)";
      document.addEventListener("click", (event)=>{
          if(event.target != selectionContainer){
              onclickSelection.style.visibility = "hidden";
              defaultCheck.style.visibility = "hidden";
              selectionContainer.style.borderTop= "2px solid rgb(194, 194, 194)";
              selected.style.boxShadow = "none";
              arrow.style.transform = "rotateX(0)";
            }
        })
        defaultCheck.style.visibility = "visible";
        if(onclickSelection.style.visibility == "visible"){
            selected.style.boxShadow = "none";
            onclickSelection.style.visibility = "hidden";
            arrow.style.transform = "rotateX(0)";
            selecteselectionContainer.style.borderTop= "2px solid rgb(194, 194, 194)";
          defaultCheck.style.visibility = "hidden";
        }else{
            arrow.style.transform = "rotateX(180deg)";
            onclickSelection.style.visibility = "visible";
            selected.style.boxShadow = "0 14px 20px 0 rgba(0, 0, 0, 0.16)";
          selecteselectionContainer.style.borderTop= "2px solid rgb(194, 194, 194, 0.1)";
      }
        
    }
  
  
    let checked;
    for(let flag of allFlags){
        flag.addEventListener("click",()=>{
            if(!checked){
                checked = document.createElement("img");
                checked.setAttribute("src", "./assets/check.png");
                checked.setAttribute("width", "18px");
                checked.setAttribute("height", "18px");
                checked.setAttribute("float", "right");
                defaultCheck.style.display = "none";
                flag.append(checked);
            }else{
                checked.remove();
                checked = document.createElement("img");
                checked.setAttribute("src", "./assets/check.png");
                checked.setAttribute("width", "18px");
                checked.setAttribute("height", "18px");
                checked.setAttribute("float", "right");
                flag.append(checked);
                defaultCheck.style.display = "none";
            }
            
        })
        
    }
  
  
  
  
  
    //Google Translate
    languages.forEach(language =>{
        language.onclick = ()=>{
            selectedName.innerHTML = language.dataset.span;
            selectedFlag.src = language.dataset.img;
            selectedFlag.style.width = "25px";
            selectedFlag.style.height = "15px";
            let googleSelect = document.querySelector("#google_translate_element select");
            for(var i=0; i < googleSelect.children.length; i++){
                var option = googleSelect.children[i];
                if(option.value==language.id){
                    googleSelect.selectedIndex = i;
                    googleSelect.dispatchEvent(new Event('change'));
                    break;
                } 
                
            }
        }
        
    })
  }
  
  
  document.addEventListener("DOMContentLoaded", footerAnim);
  