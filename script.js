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

    if (i === images.length - 1) {
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
    } else if (i == 0) {
      document.getElementById("rmLeft").style.visibility = "hidden";
    } else if (i < 4) {
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

function jump(num) {
  i = num;
  arr.push(i);
  console.log(i + "hiihh");
  if (i > 0) {
    document.getElementById("rmLeft").style.visibility = "visible";
  } else if (i == 0) {
    document.getElementById("rmLeft").style.visibility = "hidden";
  }
  if (i == 3) {
    document.getElementById("rmright").style.visibility = "hidden";
  }
  if (i < 3) {
    document.getElementById("rmright").style.visibility = "visible";
  }
  document.getElementById("slide").src = images[i];
  font();
}

mySlide(i);
