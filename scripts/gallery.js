document.addEventListener('DOMContentLoaded', function() {
    setActions();
});

function setActions() {
    var items = document.getElementsByClassName("gallery-item"); //Get each gallery item.

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        
        element.getElementsByClassName("gallery-item__img")[0].id = i.toString();
        var actions = element.getElementsByClassName("action");

        //Give each <a> element a name.
        for (let j = 0; j < actions.length; j++) {
            actions[j].id = i + ":action_" + j;
        }

        //Set onclick events for each <a> element.
        if (actions !== undefined && actions.length > 0) {
            actions[0].onclick = function() { setFilter(i, "hue-rotate(180deg)", i + ":action_0") };
            actions[1].onclick = function() { setFilter(i, "invert(100%)", i + ":action_1") };
            actions[2].onclick = function() { setFilter(i, "saturate(50%)", i + ":action_2") };
            actions[3].onclick = function() { setFilter(i, "", i + ":action_3") };
            actions[4].onclick = function() { setFilter(i, "grayscale(100%)", i + ":action_4") };
            actions[5].onclick = function() { setFilter(i, "blur(1px)", i + ":action_5") };
            actions[6].onclick = function() { setFilter(i, "sepia(100%)", i + ":action_6") };
        }
    }
}

function setFilter(id, filter, actionId) {
    var img = document.getElementById(id);

    //Return if we want to reset it:
    if (filter === "") {
        img.style = "";

        var familyId = actionId.substring(0, actionId.indexOf('_') + 1); //Remove the last id number after the '_'.
        for (let i = 0; i < 7; i++) {
            document.getElementById(familyId + i).children[0].style.color = "white"; //Reset the color of the icon.
        }

        return;
    }

    var style = img.style.filter.toString(); //Filter style of the img

    if (style.includes(filter)) {
        style = style.replace(filter, ""); //Remove already applied filter
        document.getElementById(actionId).children[0].style.color = "white"; //Make the icon white (default).
    } else {
        style += filter; //Add filter
        document.getElementById(actionId).children[0].style.color = "#ff6701"; //Give the icon a nice orange tint.
    }

    img.style = "filter: " + style;
}