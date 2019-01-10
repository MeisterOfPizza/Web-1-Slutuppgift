/* add or remove the header "flash" on scroll (if at the top of the page: remove flash) */
window.addEventListener('scroll',function() {
    if (window.scrollY == 0) {
        document.getElementById("header").classList.remove("site-top-bar-flash");
    } else {
        document.getElementById("header").classList.add("site-top-bar-flash");
    }
});