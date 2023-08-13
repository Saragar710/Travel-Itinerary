// var requestUrl =
// apiKey="AIzaSyBfC6_iJVBClIW-uA3m3qaR3g6w9zxmbvs "

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0',
//   headers: {
//     'X-RapidAPI-Key': 'b6a9e3060amsha6d19ed1a224e1ep14dbb8jsn15df1069f330',
//     'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// response.addEventListener(response.data,'click', function(event){
 
// })
const url = 'https://worldwide-restaurants.p.rapidapi.com/search';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'b6a9e3060amsha6d19ed1a224e1ep14dbb8jsn15df1069f330',
		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
	},
	body: new URLSearchParams({
		language: 'en_US',
		limit: '30',
		location_id: '297704',
		currency: 'USD'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}