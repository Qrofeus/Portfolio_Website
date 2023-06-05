const header = document.querySelector("header");
const content = document.querySelector(".nav_interact");

const content_observer = new IntersectionObserver(function(
    entries,
    content_observer
) {
    entries.forEach(entry => {
        // console.log(entry.target);
        // console.log(entry.isIntersecting);
        if (!entry.isIntersecting) {
            header.classList.add("nav_scrolled");
        } else {
            header.classList.remove("nav_scrolled");
        }
    });
});

content_observer.observe(content);

// ===================

const nav = document.querySelector(".nav_bar");
const nav_toggle = document.querySelector(".nav_toggle");

nav_toggle.addEventListener("click", (e) => {
    let visible = nav.getAttribute("data-visible");
    let icon = e.currentTarget.children[0];
    // console.log(icon);
    // console.log(icon.getAttribute("href"));

    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        icon.setAttribute("href", "#close");
    } else {
        nav.setAttribute("data-visible", false);
        icon.setAttribute("href", "#hamburger");
    }

})
