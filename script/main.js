var startTripBtn = document.getElementById("startTripBtn");
var whereToBox = document.getElementById("floatingInput");

startTripBtn.addEventListener("click", function () {
  if (whereToBox.value === "") {
    var warning = document.createElement("p");
    warning.setAttribute("id", "warning");
    warning.innerHTML = "Choose a destination to start planning";
    document.body.appendChild(warning);
  } else {
    location.href = "https://www.google.com/";
  }
});
