
var arr = [
  "red",
  "blue",
  "yellow",
  "lightgrey",
  "darkorchid",
  "black",
  "orange",
  "deeppink",
  "green",
  "purple",
  "saddlebrown",
  "lightseagreen",
  "deepskyblue",
  "firebrick",
  "crimson",
];

function random() {
    return Math.floor(Math.random() * arr.length);
}


$("button").on("click", function () {
  $(".container").append("<div class='ball'></div>");
});


