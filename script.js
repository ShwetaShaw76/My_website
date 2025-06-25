nav=document.querySelector(".nav-links")


function onToggleMenu(e){
    e.name = e.name === "menu" ? "close" : "menu"
    document.querySelector(".nav-links").classList.toggle("top-[10%]")
}