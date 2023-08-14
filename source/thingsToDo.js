console.log("Entered init js");



function initMap() {
    autocomplete = new google.maps.places.Autocomplete((document.getElementById("autocomplete")),
    {
        types:["geocode"]
    });

    autocomplete.addListener("placeChanged", searchNearbyPlaces);

}

function searchNearbyPlaces() {
    document.getElementById("places").innerHTML = "";

    var place = autocomplete.getPlace();
    console.log(place);
}

// // Construct the request URL
// const apiUrl = https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=LATITUDE,LONGITUDE&radius=RADIUS&type=TYPE&key=YOUR_API_KEY;

// // Make the API request
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the response data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });