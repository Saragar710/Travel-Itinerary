
// script.js
const apiKey = '445d492f9e332dd6f33e1de4ce363ec6'; 

async function getFlightInformation(flightNumber) {
    const apiUrl = `https://api.aviationstack.com/v1/flights/${flightNumber}?access_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const flightInfoElement = document.getElementById('flightInfo');
        flightInfoElement.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching flight information:', error);
    }
}

// Call this function when a form is submitted or a button is clicked
function handleFlightInfoSubmission() {
    const flightNumber = document.getElementById('flightNumberInput').value;
    getFlightInformation(flightNumber);
}

// Event listener for form submission or button click
const submitButton = document.getElementById('submitFlightInfo');
submitButton.addEventListener('click', handleFlightInfoSubmission);
