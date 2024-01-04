var paragraph = document.createElement("p");
var textNode = document.createTextNode(
  "┃"
);
paragraph.appendChild(textNode);
document.body.appendChild(paragraph);
document.getElementById("myHeading").textContent =
  "New heading text set with JavaScript!";