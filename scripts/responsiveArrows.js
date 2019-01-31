var arrows;

//When the user scrolls, re evaluate the arrow positions.
window.addEventListener("scroll", onScroll);

document.addEventListener('DOMContentLoaded', function() {
    getAllArrows();
});

//Gets all the "more content" arrows.
function getAllArrows() {
    arrows = document.getElementsByClassName("site-block__more-content-arrow__inner");
}

function onScroll() {
    
    //Getting the window height (Chrome)
    var windowHeight = document.documentElement.clientHeight;
    //Getting the scroll Y value.
    var scrollY = document.documentElement.scrollTop;

    //nBlockPasses is a floating point value, checking wheter or not we've passes n site blocks.
    //The need to add 75 * n pixels to the Y value is because we need to account for the footer height (of 75 pixels).
    var nBlocksPassed = (scrollY + 75 * Math.ceil(scrollY / windowHeight)) / windowHeight - 0.5;

    //Every arrow that we've passed.
    for (let i = 0; i < Math.ceil(nBlocksPassed); i++) {
        arrows[i].style.marginTop = -50 + "px";
    }

    //Every arrow that we haven't passed / passed on our way up again.
    for (let i = arrows.length - 1; i > Math.floor(nBlocksPassed); i--) {
        arrows[i].style.marginTop = -150 + "px";
    }
}