const myNav  = document.querySelector("nav");
const btnTogle = document.querySelector(".nav-toggle");

btnTogle.addEventListener("click", () => {
    const visibility = myNav.getAttribute('data-visible')
    if (visibility === "false") {
      myNav.setAttribute("data-visible", true);
     btnTogle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        myNav.setAttribute("data-visible", false);
        btnTogle.setAttribute('aria-expanded', false)
    }
    console.log(visibility)
});
