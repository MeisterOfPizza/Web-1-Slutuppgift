var arrows;

var anchors =
{
    0: "#top",
    1: "#facts",
    2: "#gallery",
    3: "#blog",
    4: "#quotes",
    5: "#about"
};

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
        arrows[i].style.marginTop = 50 + "px";
        arrows[i].style.transform = "rotate(180deg)";
        setArrowLinkHref(i, arrows[i].children[0].children[0], 0);
    }

    //Every arrow that we haven't passed / passed on our way up again.
    for (let i = arrows.length - 1; i > Math.floor(nBlocksPassed); i--) {
        arrows[i].style.marginTop = -150 + "px";
        arrows[i].style.transform = "";
        setArrowLinkHref(i, arrows[i].children[0].children[0], 1);
    }
}

function setArrowLinkHref(index, arrowLink, dir) {
   var n = Math.max(0, Math.min(index + dir, Object.keys(anchors).length - 1)); //Get the index of the next anchor.

   arrowLink.href = anchors[n]; //Apply the new anchor.
}