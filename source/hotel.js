$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault();
        
        // Get the value of the input field with the ID "city-input"
        var city = $("#city-input").val();
        
        if (city.trim() !== "") {
            var bookingUrl = "https://www.hotels.com/search.do?destination=" + encodeURIComponent(city);
            window.open(bookingUrl, "_blank");
        }
    });
});
