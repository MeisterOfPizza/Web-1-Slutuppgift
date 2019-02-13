var slideshowIndex = 0;
var slideshowMaxIndex = 2;

function nextSlideshow(direction) {
    slideshowIndex += direction;

    //Wrap index to fit range
    if (slideshowIndex < 0) slideshowIndex = slideshowMaxIndex;
    else if (slideshowIndex > slideshowMaxIndex) slideshowIndex = 0;

    //Hide the images not to be displayed, however, show the one that matches the current index.
    for (let i = 0; i < slideshowMaxIndex + 1; i++) {
        const element = document.getElementById("slideshow_img_" + i);
        
        if (i === slideshowIndex) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}