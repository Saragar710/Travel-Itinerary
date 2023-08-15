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
    document.getElementById("places").innerHTML = "<tr><th>Location contact information</th><th>Open hours</th><th>Location Image</th></tr>";

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

function getPlaceDetails (Id) {
return new Promise((resolve, reject) => {
    let request = {
        placeId: Id,
        fields: ["name","formatted_address","rating","opening_hours","photos","website","geometry","formatted_phone_number","user_ratings_total"]
    };
    
    let service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            resolve(place); // Resolve the promise with the place details
          } 
        else {
            reject(new Error(status)); // Reject the promise with an error
          }
    });
});
    
}

function callbackDetails(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log('There are this many results:', results);
  }
}

function createMarker(place) {
    //console.log(place);
    var id = place.place_id;
    var table = document.getElementById("places");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);

    var cell2 = row.insertCell(1);



    getPlaceDetails(id)
    .then((place) => {
        // Access the place details and use them as needed
        console.log(place.name);
        console.log(place.formatted_address);
        console.log(place.rating);
        console.log(place.opening_hours);
        console.log(place.website);
        console.log(place.formatted_phone_number);

        if (!place.formatted_address) {
            place.formatted_address = "No address available";
        }

        if (!place.rating) {
            place.rating = "No rating available";
        }

        if (!place.opening_hours) {
            place.opening_hours = "No opening hours available";
        }

        if (!place.website) {
            place.website = "No website address available";
        }

        if (!place.formatted_phone_number) {
            place.formatted_phone_number = "No phone number available";
        }

        
        cell1.innerHTML = (place.name + "<br><br> <b><u>Address:</u></b><br>" + place.formatted_address + "<br><br><b><u>Rating:<br></u></b>" + place.rating + "<br><br><b><u>Website address:<br></u></b>" + "<a href=\"" + place.website +"\">"+place.website+ "</a>" + "<br><br><b><u>Phone number:<br></u></b>" + place.formatted_phone_number);
        // ...

        if (place.opening_hours.weekday_text) {
            console.log (place.opening_hours.weekday_text);

            cell2.innerHTML += (place.opening_hours.weekday_text[0]);
            cell2.innerHTML += ("<br>" + place.opening_hours.weekday_text[1]);
            cell2.innerHTML += ("<br>" + place.opening_hours.weekday_text[2]);
            cell2.innerHTML += ("<br>" + place.opening_hours.weekday_text[3]);
            cell2.innerHTML += ("<br>" + place.opening_hours.weekday_text[4]);
            cell2.innerHTML += ("<br>" + place.opening_hours.weekday_text[5]);
            cell2.innerHTML += ("<br>" + place.opening_hours.weekday_text[6]);


        } else {
            cell2.innerHTML = "No hours available";
        }




      })
      .catch((error) => {
        // Handle the error if the API request fails
        console.error(error);
      });



    

    if(place.photos) {
        const image = document.createElement("img");
        image.src = place.photos[0].getUrl();
        let cell3 = row.insertCell(2);
        image.width = 300;
        image.height = 200;
        image.style.borderRadius = 50; 
        cell3.innerHTML = image.outerHTML;
    }

    else {
        const image = document.createElement("img");
        image.src = "./images/roam_radar_200x300.png";
        let cell3 = row.insertCell(2);
        image.width = 300;
        image.height = 200;
        image.style.borderRadius = 50; 
        cell3.innerHTML = image.outerHTML;
    }
        
}

document.getElementById("type").onchange = searchNearbyPlaces;