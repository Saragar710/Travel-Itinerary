// var requestUrl =
apiKey="AIzaSyBfC6_iJVBClIW-uA3m3qaR3g6w9zxmbvs "

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0',
  headers: {
    'X-RapidAPI-Key': 'b6a9e3060amsha6d19ed1a224e1ep14dbb8jsn15df1069f330',
    'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
response.addEventListener(response.data,'click', function(event){
 
})
