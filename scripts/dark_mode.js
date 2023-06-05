let dark_mode = localStorage.getItem("dark_mode");
const dark_mode_toggle = document.querySelector("#dark_mode_toggle");

const enable_dark_mode = () => {
    // 1. Add dark_mode class to body tag
    document.body.classList.add("dark_mode");
    // 2. Update dark_mode item in localStorage
    localStorage.setItem("dark_mode", "enabled");
}

const disable_dark_mode = () => {
    // 1. Remove dark_mode class to body tag
    document.body.classList.remove("dark_mode");
    // 2. Update dark_mode item in localStorage
    localStorage.setItem("dark_mode", null);
}

// Check dark_mode settings from previous visit
if (dark_mode === "enabled") {
    enable_dark_mode();
}

// SVG click event listener
dark_mode_toggle.addEventListener("click", () => {
    // console.log('Toggle Dark Mode')
    dark_mode = localStorage.getItem("dark_mode");
    if (dark_mode !== "enabled") {
        enable_dark_mode();
    } else {
        disable_dark_mode();
    }
})

// Observer for overlap with footer
const footer = document.querySelector("footer");

const footer_observer = new IntersectionObserver(function(
    entries,
    content_observer
) {
    entries.forEach(entry => {
        // console.log(entry.target);
        // console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
            dark_mode_toggle.classList.add("footer_overlap");
        } else {
            dark_mode_toggle.classList.remove("footer_overlap");
        }
    });
});

footer_observer.observe(footer);
