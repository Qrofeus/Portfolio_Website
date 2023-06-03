const nav = document.querySelector("nav");
const content = document.querySelector(".nav_interact");

const content_observer = new IntersectionObserver(function(
    entries,
    content_observer
) {
    entries.forEach(entry => {
        // console.log(entry.target);
        // console.log(entry.isIntersecting);
        if (!entry.isIntersecting) {
            nav.classList.add("nav_scrolled");
        } else {
            nav.classList.remove("nav_scrolled");
        }
    });
});

content_observer.observe(content);
