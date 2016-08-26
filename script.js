// Your JS goes here
var boxCount = 0;
var body = document.getElementsByTagName('body')[0]

function randomColors () {
  var values = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
  var newArray = [];

  for (var i = 0; i < 6; i++) {
    var num = Math.floor((Math.random() * 16));
    newArray.push(values[num])
  }

  return "#" + newArray.join("");
}

function makeDiv() {
  var div = document.createElement('div');
  div.setAttribute('id', boxCount)
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";
  body.appendChild(div)
  boxCount++
}

for (var i = 0; i < 100; i++) {
  makeDiv()
}

setInterval(function () {
  for (var i = 0; i < 100; i++) {
    var scanDiv = document.getElementById(i);
    var random = randomColors()

    if (i % 2 === 0) {
      scanDiv.style.backgroundColor = randomColors();
    } else {
      scanDiv.style.backgroundColor = randomColors();
    }
  }
}, 2000)
