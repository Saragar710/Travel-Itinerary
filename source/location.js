var startTripBtn = document.getElementById("startTripBtn");
var whereToBox = document.getElementById("floatingInput");

var hasWarning = false;
startTripBtn.addEventListener("click", function () {
  if (whereToBox.value === "") {
    if (!hasWarning){
    var warning = document.createElement("p");
    warning.setAttribute("id", "warning");
    warning.innerHTML = "Choose a destination to start planning";
    document.body.appendChild(warning);
hasWarning = true;
    }
  } else {
    window.location.href = "navbar.html";
  }
  var city= whereToBox.value;
  console.log(city);
});

var city = whereToBox.value;
console.log(city);