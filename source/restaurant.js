
    function initMap() {
        autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
        {
            types:['geocode']
        });
        autocomplete.addListener('place_changed', searchNearbyRestaurants);
	}	
        // function initializeMap() {
        //     var initialLocation = { lat:28.381234066504312, lng:-81.61096094887043};
        //     var map = new google.maps.Map(document.getElementById('map'),{
        //         center: initialLocation,
        //         zoom: 10
        //     });
        // }
    
    // function searchNearbyRestaurants(){
    //      document.getElementById('type').onchange = searchNearbyRestaurants
    
    function searchNearbyRestaurants(){
		console.log("Selected searchNearbyRestaurants");

        document.getElementById('restaurants').innerHTML = '';

        var restaurant = autocomplete.getPlace();
        

        map = new google.maps.Map(document.getElementById('map'), {
            center: restaurant.geometry.location,
            zoom: 15
        });

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: restaurant.geometry.location,
            radius: '500',
            type: ['restaurants']
        }, callback)
    }
    function callback(results, status) {
        if(status === google.maps.places.PlacesServiceStatus.OK) {
           console.log(results.length)
           for(var i = 0; i < results.length; i++) {
               createMarker(results[i]);
        }
	}
	}

    function createMarker(restaurant) {
        console.log(restaurant);
        var table = document.getElementById("restaurants");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        cell1.innerHTML = restaurant.name;
        if(restaurant.photos) {
            var image = document.createElement("img");
            image.src = restaurant.photos[0].getUrl();
            let cell2 = row.insertCell(1);
            image.width = 300;
            image.height = 200;
            image.style.borderRadius = 50;
            cell2.innerHTML = image.outerHTML;

        } else { 
            const image = document.createElement("img");
            image.src = "./images/roam_radar_200x300.png";
            let cell2 = row.insertCell(1);
            image.width = 300;
            image.height = 200;
            image.style.borderRadius = 50; 
            cell2.innerHTML = image.outerHTML;
            }
        }
    document.getElementById("type").onchange = searchNearbyRestaurants;
    
    
    function addButton() {
        var groupID = document.querySelectorAll('table');
        groupID.forEach(row => {
            groupID.addEventListener("click", saveGroupToLocalStorage);
        });
    }

    function saveGroupToLocalStorage(event) {
        var group = event.currentTarget;

        group.style.background ="white";

        var content = group.classList.toString();
        var restaurantId = generateUniqId();

        let isContSaved = false;
        for(let i =0; i < localStorage.length; i++) {
            var storedCont = localStorage.getItem("restaurantId" );
            if (content === storedCont) {
                isContSaved = true;
                break;
            }

        }
        if (!isContSaved){
         localStorage.setItem(restaurantId, content);


         var inputKeys = JSON.parse(localStorage.getItem('inputKeys'));
         inputKeys.push(restaurantId);
         localStorage.setItem('inputKeys', JSON.stringify(inputKeys));

         console.log("restaurant with ID" +  groupId  + " saved to local storage.");
        } else { 
        console.log("restaurant with ID" +  groupId  + " already exists in local storage.");
        }
    }
    
    function generateUniqId() {
        return Math.random().toString(36).substring(2,10);
    }
  

  clearAllButton = document.getElementById("clearAllButton");
  clearAllButton.addEventListener("click", function () {
    var restaurantTables = document.querySelectorAll(".restaurantTable");
    restaurantTables.forEach(function (restaurantTable) {
        restaurantTable.style.background = "#87CEFA";

        var inputKeys = JSON.parse(localStorage.getItem('inputKeys'));
    
    console.log(inputKeys);

    if (inputKeys) {
        inputKeys.forEach(function (event) {
            localStorage.removeItem(event);
        });
    }
       
  });
  localStorage.removeItem("inputKeys");
  localStorage.setItem('inputKeys',JSON.stringify([]));
});