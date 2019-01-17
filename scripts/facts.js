document.addEventListener('DOMContentLoaded', function() {
  setFactBgColor();
});

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