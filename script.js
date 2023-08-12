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

    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const getFlightStatusButton = document.getElementById('getFlightStatus'); 
    const popupContainer = document.getElementById('popupContainer');

    openPopupButton.addEventListener('click', () => {
        popupContainer.style.display = 'block';
        popupContainer.style.left = '50%';
        popupContainer.style.top = '50%';
        popupContainer.style.transform = 'translate(-50%, -50%)';
    });

    closePopupButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });


    getFlightStatusButton.addEventListener('click', () => {
        fetchFlightStatus(); 
    });

    async function fetchFlightData() {
        try {
            const response = await axios.request(options);
            const data = response.data;
            const models = data.rows[0].models;
            const flightInfoElement = document.getElementById('flightInfo');

            let modelsList = '';
            models.forEach(model => {
                modelsList += `Name: ${model.Name}\n`;
            });

            flightInfoElement.textContent = modelsList;
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchFlightStatus() {
        const statusUrl = 'https://flight-info-api.p.rapidapi.com/status?version=v2';
        const statusOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2c9b45b403mshb258d51c24eddd7p191cfdjsn5579d0707170',
                'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(statusUrl, statusOptions);
            const result = await response.text();
            console.log(result);
            document.getElementById('flightInfo').textContent = result;
        } catch (error) {
            console.error(error);
        }
    }
});
