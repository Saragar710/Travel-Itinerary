var startTripBtn = document.getElementById("startTripBtn");
var whereToBox = document.getElementById("floatingInput");
var startDate = document.getElementById("floatingInputGrid");
var endDate = document.getElementById("floatingInputGrid2");

var hasWarning = false;
var autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.querySelector(".autocomplete"),
    {
      types: ["(cities)"],
    }
  );
}

var preferredDestination= {
  location: whereToBox.value,
  startDate:startDate.value,
  endDate:endDate.value
}
console.log(preferredDestination);
// var userData = JSON.stringify(preferredDestination);
var searchCity = JSON.parse(window.localStorage.getItem("searchCity")) || [];

var hasWarning = false;

startTripBtn.addEventListener("click", function () {
  if (whereToBox.value === "") {
    if (!hasWarning) {
      var warning = document.createElement("p");
      warning.setAttribute("id", "warning");
      warning.innerHTML = "Choose a destination to start planning";
      document.body.appendChild(warning);
      hasWarning = true;
    }
  } else {
    window.location.href = "navbar.html";
  }

 var preferredDestination = {
   location: whereToBox.value,
   startDate: startDate.value,
   endDate: endDate.value,
 };
  localStorage.setItem("chosen Location", JSON.stringify(preferredDestination));
 
});
var storedData = JSON.parse(localStorage.getItem("Chosen Location")) || [];
  searchCity.push(preferredDestination);
  localStorage.setItem("searchCity", JSON.stringify(preferredDestination));
});

