nav=document.querySelector(".nav-links")
nxt=document.querySelector(".next")
prev=document.querySelector(".prev")
img=document.querySelectorAll(".img")
post=document.querySelector(".post")


let i = 0; 

nxt.addEventListener("click", function () {
    if (i < img.length - 1) {
        img[i].classList.add("hidden");
        i++;
        img[i].classList.remove("hidden");

        
        prev.classList.remove("hidden");
    }

    if (i === img.length - 1) {
        nxt.classList.add("hidden");
    }
});

prev.addEventListener("click", function () {
    if (i > 0) {
        img[i].classList.add("hidden");
        i--;
        img[i].classList.remove("hidden");
        nxt.classList.remove("hidden");
    }

    if (i === 0) {
        prev.classList.add("hidden");
    }
});

function onToggleMenu(e){
    e.name = e.name === "menu" ? "close" : "menu"
    document.querySelector(".nav-links").classList.toggle("top-[10%]")
}