document.addEventListener('DOMContentLoaded', function() {
  //setFactBgColor();
  //setFactIds();
});

/*
function setFactBgColor() {
  var elems = document.getElementsByClassName("fact__background");
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function setFactIds() {
  var facts = document.getElementsByClassName("fact");
  var factContent = document.getElementsByClassName("fact__text__container");
  var factArrows = document.getElementsByClassName("fact__arrow");

  for (let i = 0; i < facts.length; i++) {
    facts[i].onclick = function() { openFact("fact-text-" + i, "fact-arrow-" + i); };
    factContent[i].id = "fact-text-" + i;
    factArrows[i].id = "fact-arrow-" + i;
  }
}

function openFact(id, arrowId) {
  var elem = document.getElementById(id);
  var content = elem.firstElementChild;

  document.getElementById(arrowId).classList.toggle("open");

  if (elem.classList.contains("open")) {
    elem.classList.remove("open");

    elem.style.maxHeight = "0px";
  } else {
    elem.classList.add("open");

    elem.style.maxHeight = content.scrollHeight + "px";
  }
}
*/