// (START OF NICOLES PORTION)
var outputTitle = document.getElementById("outputTitle");
var outputStart = document.getElementById("outputStart");
var outputEnd = document.getElementById("outputEnd");

function displayTitle() {
  outputTitle.innerHTML = chosenLocation.location;
  outputStart.innerHTML = chosenLocation.startDate;
  outputEnd.innerHTML = chosenLocation.endDate;
}
var chosenLocation = JSON.parse(localStorage.getItem("chosen Location"));

displayTitle();
// (END OF NICOLES PORTION)

/* If adding JS to your portion of navbar page please do not touch CSS that is above, it will mess up 
current look (ADD AT THE TOP AND BOTTOM OF YOUR SECTIONS YOUR NAME COMMENTED OUT TO AVOID GITHUB CONFLICTS ) */


//(START OF ALEJANDRA'S PORTION)

var visitButton = document.getElementById("placesToVisitButton");
visitButton.addEventListener("click", function () {
window.location.href= "thingsToDo.html";
})

//(END OF ALEJANDRA'S PORTION)
