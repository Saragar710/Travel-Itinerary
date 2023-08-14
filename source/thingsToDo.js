function initMap() {
    console.log("InitMap was entered");
    
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
    {
        types:["geocode"]
    });

    autocomplete.addListener("place_changed", searchNearbyPlaces);

}

function searchNearbyPlaces() {

    console.log("Entered SearchNearbyPlaces Function");

    //resets table in case user enters a different location
    document.getElementById("places").innerHTML = "";

    var place = autocomplete.getPlace();
    console.log(place);

    map = new google.maps.Map(document.getElementById("map"), {
        center: place.geometry.location,
        zoom:15
    });

    console.log([document.getElementById("type").value]);

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: place.geometry.location,
        radius: "5000",
        type: [document.getElementById("type").value]
        }, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log("There are this many results: " + results.length);
        for (var i = 0; i< results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    console.log(place);
    var table = document.getElementById("places");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = (place.name + "<br><br>" + place.vicinity);

    if(place.photos) {
        const image = document.createElement("img");
        image.src = place.photos[0].getUrl();
        let cell2 = row.insertCell(1);
        image.width = 300;
        image.height = 200;
        image.style.borderRadius = 50; 
        cell2.innerHTML = image.outerHTML;
        cell2.innerHTML.style.borderRadius = 50;
    }
        
}

document.getElementById("type").onchange = searchNearbyPlaces;