document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '2c9b45b403mshb258d51c24eddd7p191cfdjsn5579d0707170';

    const url = 'https://flight-radar1.p.rapidapi.com/aircrafts/list';
    const options = {
        method: 'GET',
        url: 'https://flight-radar1.p.rapidapi.com/aircrafts/list',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };

    const getFlightStatusButton = document.getElementById('getFlightStatus'); 
    const saveFlightInfoButton = document.getElementById('saveFlightInfo'); // New button
    const flightInfoElement = document.getElementById('flightInfo');

    getFlightStatusButton.addEventListener('click', () => {
        fetchFlightStatus(); 
    });

    saveFlightInfoButton.addEventListener('click', () => {
        saveFlightInfo(); // Call the new function when the "Save" button is clicked
    });

    async function fetchFlightStatus() {
        // ... (existing fetchFlightStatus code)
    }

    function saveFlightInfo() {
        const airline = document.getElementById('airlineInput').value;
        const flightNumber = document.getElementById('flightNumberInput').value;
        const date = document.getElementById('dateInput').value;

        const flightInfo = {
            airline,
            flightNumber,
            date
        };

        // Store the flightInfo object in localStorage
        localStorage.setItem('flightInfo', JSON.stringify(flightInfo));

        alert('Flight information saved!');
    }
});
