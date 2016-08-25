// Your JS goes here
var body = document.getElementsByTagName('body')[0]

for (var i = 0; i < 200; i++) {
  var div = document.createElement('div');
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";

  if (i % 2 === 0) {
    div.style.backgroundColor = "rgba(173, 33, 99, " + (.02 * i) + ")";
  } else {
    div.style.backgroundColor = "rgba(13, 133, 199, " + (.02 * i) + ")";
  }

  body.appendChild(div);
}
