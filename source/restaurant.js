
    function initMap() {
        autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
        {
            types:['geocode']
        });
        autocomplete.addListener('place_changed', searchNearByRestaurants);
	}	
        function initializeMap() {
            var initialLocation = { lat:28.381234066504312, lng:-81.61096094887043};
            var map = new google.maps.Map(document.getElementById('map'),{
                center: initialLocation,
                zoom: 10
            });
        }
    
    function searchNearbyRestaurants(){
         document.getElementById('type').onchange = searchNearbyRestaurants
    }
    function searchNearbyRestaurants(){
		console.log("Selected searchNearbyRestaurants");

        document.getElementById('restaurant').innerHTML = '';

        var restaurant = autocomplete.getRestaurant();
        
        // function getRestaurant() {
        //   console.log("hello")
        

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
            let photoUrl = restaurant.photos[0].getUrl();
            let cell2 = row.insertCell(1);
            cell2.innerHTML = `<img width="300" height="300" src="${photoUrl}"/>`;
        } else { 
                let photoUrl = "https://via.placeholder.com/150";
                let cell2 = row.insertCell(1);
                cell2.innerHTML = `<img width="300" height="300" src="${photoUrl}"/>`;
            }
        }
    