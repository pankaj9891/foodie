const backTopBtn = document.querySelector("[data-back-top-btn]")
const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function () {
    if(window.scrollY >= 100) {
        header.classList.add("active")
        backTopBtn.classList.add("active")
    } else{
        backTopBtn.classList.remove("active")
        header.classList.remove("active")
    }
})