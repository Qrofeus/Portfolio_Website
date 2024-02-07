

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
