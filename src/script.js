const menu_bar = document.querySelector(".menu-bar");
const aside = document.querySelector("aside");

menu_bar.addEventListener("click", (event) =>{
    console.log("hello")
    aside.classList.toggle("on");
    menu_bar.classList.toggle("x");
})