/* carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        890: {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
});

/* Menu ativo conforme a secção visível na página */
const sections = document.querySelectorAll("main section[id]")
function activateMenuAtCurrentSection () {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                    .querySelector("header nav ul li a[href*=" + sectionId + "]")
                    .classList.add("active")

        } else {
            document
                .querySelector("header nav ul li a[href*=" + sectionId + "]")
                .classList.remove("active")
        }
    }
}

/* When Scroll */
window.addEventListener("scroll", function (){
    activateMenuAtCurrentSection ()
})