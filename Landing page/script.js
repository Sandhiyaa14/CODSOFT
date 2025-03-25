let header = document.getElementById("header")

window.addEventListener("scroll",function(){
    if(window.scrollY >= 100){
        header.classList.add("active")
    }
    else {
        header.classList.remove("active");
    }
})

let menu = document.getElementById("menu")
let nav = document.getElementById("nav")

menu.addEventListener("click",()=>{
    nav.style.left = 0
})

let close = document.getElementById("close-icon")

close.addEventListener("click",()=>{
    nav.style.left = "-300px"
})

let navLinks = nav.querySelectorAll("a");
navLinks.forEach((a)=>{
    a.addEventListener("click",()=>{
        nav.style.left = "-300px"
    })
})

document.addEventListener("click", (e) => {
    const navLeft = window.getComputedStyle(nav).left;

    if (navLeft === "0px" && 
        !nav.contains(e.target) 
    ) {
        nav.style.left = "-300px";
    }
});
