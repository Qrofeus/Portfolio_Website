// Navigation scroll shadow
const header = document.querySelector("header");
const content = document.createElement("div");

content.setAttribute("data-scroll-interact", "");
header.before(content);

const content_observer = new IntersectionObserver((entries) => {
    header.classList.toggle("nav_scrolled", !entries[0].isIntersecting);
});

content_observer.observe(content);

// =====================================================================
// Mobile Hamburger Menu
const nav = document.querySelector(".nav_bar");
const nav_toggle = document.querySelector(".nav_toggle");

nav_toggle.addEventListener("click", (e) => {
    let visible = nav.getAttribute("data-visible");
    let icon = e.currentTarget.children[0];

    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        icon.setAttribute("href", "#close");
    } else {
        nav.setAttribute("data-visible", false);
        icon.setAttribute("href", "#hamburger");
    }

})
