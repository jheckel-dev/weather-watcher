var searchButton =$(".searchButton");

var apiKey= "b3f03bc91b3503ca26b7aeea2999133d"

for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);
    var cityName = $(".list-group").addClass("list-group-item");

    cityName.append("<li>" + city + "</li>");
}

var keyCount = 0;

searchButton.click(function () {
    var searchInput = $(".searchInput").val();

    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";

    var urlSevenDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
})