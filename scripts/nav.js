var navExpanded = false; // Is the navbar expanded?

/* Add or remove the header "flash" on scroll (if at the top of the page: remove flash) */
window.addEventListener('scroll', function() {
    if (window.scrollY == 0) {
        document.getElementById("header").classList.remove("site-top-bar-flash");
    } else {
        document.getElementById("header").classList.add("site-top-bar-flash");
    }
});

function expandNav() {
    if (!navExpanded) {
        document.getElementById("nav-list").classList.add("nav-list--expanded");
        document.getElementById("site-top-bar").style = "height: 280px; background-color: #333;";
    } else {
        document.getElementById("nav-list").classList.remove("nav-list--expanded");
        document.getElementById("site-top-bar").style = "";
    }

    navExpanded = !navExpanded;
}

//Collapse timeline node cards
function collapseCard(id) {
    var element = document.getElementById(id);
    element.classList.toggle("closed");
}