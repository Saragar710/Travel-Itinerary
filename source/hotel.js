$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault();
        var city = $("#city-input").val();
        if (city.trim() !== "") {
            var bookingUrl = "https://www.hotels.com/search.do?destination=CityName=" + encodeURIComponent(city);
            window.open(bookingUrl, "_blank");
        }
    });
});