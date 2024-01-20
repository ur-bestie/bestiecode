const navOpnen = document.querySelector(".open_btn");
const navClose = document.querySelector(".close_btn");
const myNav = document.querySelector("nav");
const navlinks = document.querySelectorAll(".nav_link");



navOpnen.addEventListener("click",()=>{
    myNav.style.transform = "translate(0%)";
})

navClose.addEventListener("click",()=>{
    myNav.style.transform = "translate(100%)";
})



if (window.innerWidth <= 900){
        for (let links of navlinks ){
    links.addEventListener("click", ()=>{
    myNav.style.transform = "translate(100%)";
})
  }
    }


const typed = new Typed('.typed_js',{
strings: ['Quality Foods','Afordable Foods','Nutricious Food',],
typeSpeed: 100,
backSpeed: 100,
backDelay:1000,
loop: true
})
