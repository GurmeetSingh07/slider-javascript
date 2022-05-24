var i = 0;
var arr = [];

images = [
  "./images/a.jpeg",
  "./images/b.jpg",
  "./images/c.jpg",
  "./images/d.jpg",
];

if (i == 0) {
  document.getElementById("rmLeft").style.visibility = "hidden";
}
function mySlide(param) {
  if (param === "next") {
    i++;
    arr.push(i);

    if (i === images.length) {
      i = images.length - 1;
      document.getElementById("rmright").style.visibility = "hidden";
    } else if (i == 1) {
      document.getElementById("rmLeft").style.visibility = "visible";
    }
  } else {
    i--;
    arr.push(i);
    if (i < 0) {
      i = 0;
    } else if (i < 5) {
      document.getElementById("rmright").style.visibility = "visible";
    }
  }

  document.getElementById("slide").src = images[i];
  console.log(i + "hello");
  font(i);
}

function font() {
  var newIndex = arr.length - 1;
  var oldIndex = arr.length - 2;

  document.getElementById(`dot-${arr[newIndex]}`).style.textDecoration =
    "underline";

  document.getElementById(`dot-${arr[oldIndex]}`).style.textDecoration = "none";
}

mySlide(i);
