document.getElementById("about-button").addEventListener("click", function () {
    document.getElementById("about-text").textContent = "I'm a web developer passionate about creating awesome websites!";
});
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const aboutItems = document.querySelectorAll(".about-item");
    aboutItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add("fade-in");
        }
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
