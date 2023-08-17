// var requestUrl =
// apiKey="AIzaSyBfC6_iJVBClIW-uA3m3qaR3g6w9zxmbvs "


var myApi = "AIzaSyDa-NcckTIrTU8Qhz437JcSJoK30OswcGg"
// AIzaSyDa-NcckTIrTU8Qhz437JcSJoK30OswcGg //google api key






// const url = 'https://worldwide-restaurants.p.rapidapi.com/search';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'b6a9e3060amsha6d19ed1a224e1ep14dbb8jsn15df1069f330',
// 		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		language: 'en_US',
// 		limit: '30',
// 		location_id: '297704',
// 		currency: 'USD'
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// 
  

    function initMap() {
        autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
        {
            types:['geocode']
        })
        autocomplete.addListener('place_changed', searchNearByRestaurants);

        // function initMap() {
        //     var initialLocation = { lat:28.381234066504312, lan:-81.61096094887043};
        //     map = new google.maps.Map(document.getElementById('map'),{
        //         center: initialLocation,
        //         zoom: 10
        //     });
        // }
    }
    // function searchNearByRestaurants(){
    //      document.getElementById('type').onchange = searchNearByRestaurants
    // }
    function searchNearByRestaurants(){
		console.log("Selected searchNearByRestaurants");

        document.getElementById('restaurant').innerHTML = ''

        var restaurant = autocomplete.getRestaurant();
        
        function getRestaurant() {
          console.log("hello")
        }

        map = new google.maps.Map(document.getElementById('map'), {
            center: restauarant.geometry.location,
            zoom: 15
        });

        service = new google.maps.places.RestaurantsService(map);
        service.nearbySearch({
            location: place.geometry.location,
            radius: '500',
            type: [restaurants]
        }, callback)
    }
    function callback(results, status) {
        if(status === google.maps.places.PlacesServiceStatus.OK){
        console.log(results.length)
        for(var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }}

    function createMarker(restaurant){
        console.log(restaurant);
        var table = document.getElementById("restaurants");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        cell1.innerHTML = restaurant.name;
        if(restaurant.photos) {
            let photoUrl = restaurant.photos[0].getUrl();
            let cell2 = row.insertCell(1);
            cell2.innerHTML = `<img width="300" height="300" src="${photoUrl}"/>`;
        }else{ 
                let photoUrl = "https://via.placeholder.com/150";
                let cell2 = row.insertCell(1);
                cell2.innerHTML = `<img width="300" height="300" src="${photoUrl}"/>`;
            }
        }
    }