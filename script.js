const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    // Navbar background change
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Section animation + active link
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if(window.scrollY >= sectionTop){
            section.classList.add("show");

            navLinks.forEach(link => {
                link.classList.remove("active");
                if(link.getAttribute("href").substring(1) === section.getAttribute("id")){
                    link.classList.add("active");
                }
            });
        }
    });

});