const URL = "http://localhost:8080/api/cars/"

let lastVisibleContent = document.getElementById("div-info");
document.getElementById("btns").onclick = handleButtonClick
//Handle the switching between the different views

function handleButtonClick(evt) {
    const target = evt.target
    const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-")
    if (!isMenuBtn) {
        return
    }
    lastVisibleContent.style.display = "none"
    const idForNewVisibleContent = target.id.replace("menu-btn", "div")
    lastVisibleContent = document.getElementById(idForNewVisibleContent);
    lastVisibleContent.style.display = "block"

    //Now handle JavaScript for the buttom clicked
    switch (target.id) {
        case "menu-btn-info": break //No JavaScript for this view
        case "menu-btn-show-all": showAll(); break
        case "menu-btn-find-one": findOne(); break
        case "menu-btn-add-one": addOne(); break
        case "menu-btn-edit-one": editOne(); break
    }
}

