// Your JS goes here
var body = document.getElementsByTagName('body')[0]

for (var i = 0; i < 100; i++) {
  var div = document.createElement('div');
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";

  if (i % 2 === 0) {
    div.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "#342534";
  }

  body.appendChild(div);
}
