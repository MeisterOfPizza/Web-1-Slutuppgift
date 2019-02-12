document.addEventListener('DOMContentLoaded', function() {
    setActions();
});

function setActions() {
    var items = document.getElementsByClassName("gallery-item");

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        
        element.getElementsByClassName("gallery-item__img")[0].id = i.toString();
        var actions = element.getElementsByClassName("action");

        if (actions !== undefined && actions.length > 0) {
            actions[0].onclick = function() { setFilter(i, "hue-rotate(180deg)") };
            actions[1].onclick = function() { setFilter(i, "invert(100%)") };
            actions[2].onclick = function() { setFilter(i, "saturate(50%)") };
            actions[3].onclick = function() { setFilter(i, "") };
            actions[4].onclick = function() { setFilter(i, "grayscale(100%)") };
            actions[5].onclick = function() { setFilter(i, "blur(1px)") };
            actions[6].onclick = function() { setFilter(i, "sepia(100%)") };
        }
    }
}

function setFilter(id, filter) {
    var img = document.getElementById(id);

    //Return if we want to reset it:
    if (filter === "") {
        img.style = "";
        return;
    }

    var style = img.style.filter.toString(); //Filter style of the img

    if (style.includes(filter)) {
        style = style.replace(filter, ""); //Remove already applied filter
    } else {
        style += filter; //Add filter
    }

    img.style = "filter: " + style;
}