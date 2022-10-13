var apiKey = "a4e3e24d7d7b9031fc83efc64f5a";

function currentWeather(){
  navigator.geolocation.getCurrentPosition(function (position){
    longitude = position.coords.longitude; // get longitude
    latitude = position.coords.latitude; // get latitude

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" +  apiKey;

    $.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
    var iconCode = response.weather[0].icon;
    
    var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".city").html("<h1> " + response.name + " </h1>");
    $(".temp").text("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
    $(".humidity").text("Humidity: " + response.main.humidity + " %");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $("#wicon").attr("src", iconurl);
  });

  });
};

currentWeather();


$("button").on("click", function(event) {
console.log("clicked")
}

var cities = [];

function getCities(){
  var getCity = localStorage.getItem("cities");
  console.log("cities got");
}
