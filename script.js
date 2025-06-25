nav=document.querySelector(".nav-links")
nxt=document.querySelector(".next")
prev=document.querySelector(".prev")
img=document.querySelectorAll(".img")

dark=document.querySelector(".dark")
dark.addEventListener("click", function () {
    light.classList.remove("hidden");
    dark.classList.add("hidden");
    document.body.classList.add("dark")
});
light=document.querySelector(".light")
light.addEventListener("click", function () {
    dark.classList.remove("hidden");
    light.classList.add("hidden");
    document.body.classList.remove("dark")
});

function showcomment(e){
    post.classList.add("hidden");
    w_comment.classList.add("hidden");
    comments.classList.remove("hidden");
}



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