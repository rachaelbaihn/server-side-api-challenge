var api = "52c6469b398b5f89ec8e095a4887f7db"
var cityName = "Atlanta";
getCityDetails(cityName);

var btnSearch = $("#citySubmit");
btnSearch.on("click",searchCity)

function searchCity (){
  var inputCity = $("#finalCity");
  cityName = inputCity.val();
  getCityDetails(cityName);
};

var btnList = $(".btn");
btnList.on("click",searchListCity)

function searchListCity (){
  var button = $(this)
  cityName = button.text();
  getCityDetails(cityName);
};



function mainCityInfo (temperature, wind, humidity, date, temperatureOne, windOne, humidityOne, dateOne, temperatureTwo, windTwo, humidityTwo, dateTwo, temperatureThree, windThree, humidityThree, dateThree, temperatureFour, windFour, humidityFour, dateFour) {
  $("#city-search-term").text(cityName + " (" + date + ")");
  $("#temp-input").text("Temperature: " + temperature + "°C");
  $("#wind-input").text("Wind Speed: " + wind + "kph");
  $("#humidity-input").text("Humidity: " + humidity + "%");
  $("#date-0").text(date);
  $("#date-1").text(dateOne);
  $("#date-2").text(dateTwo);
  $("#date-3").text(dateThree);
  $("#date-4").text(dateFour);
  $("#temp-input-0").text("Temperature: " + temperature + "°C");
  $("#temp-input-1").text("Temperature: " + temperatureOne + "°C");
  $("#temp-input-2").text("Temperature: " + temperatureTwo + "°C");
  $("#temp-input-3").text("Temperature: " + temperatureThree + "°C");
  $("#temp-input-4").text("Temperature: " + temperatureFour + "°C");
  $("#wind-input-0").text("Wind Speed: " + wind + "kph");
  $("#wind-input-1").text("Wind Speed: " + windOne + "kph");
  $("#wind-input-2").text("Wind Speed: " + windTwo + "kph");
  $("#wind-input-3").text("Wind Speed: " + windThree + "kph");
  $("#wind-input-4").text("Wind Speed: " + windFour + "kph");
  $("#humidity-input-0").text("Humidity: " + humidity + "%");
  $("#humidity-input-1").text("Humidity: " + humidityOne + "%");
  $("#humidity-input-2").text("Humidity: " + humidityTwo + "%");
  $("#humidity-input-3").text("Humidity: " + humidityThree + "%");
  $("#humidity-input-4").text("Humidity: " + humidityFour + "%");
}

function getWeatherData (lat, lon) {
  var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=' + lat + '&lon=' + lon + '&appid=' + api;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Error: ' + response.statusText);
      }
    }).then (function (data) {
      var dateInitial = data.list[0].dt_txt;
      var date = dateInitial.slice(0, 10);
      var temperature = data.list[0].main.temp;
      var wind = data.list[0].wind.speed;
      var humidity = data.list[0].main.humidity;

      var dateInitial = data.list[1].dt_txt;
      var dateOne = dateInitial.slice(0, 10);
      var temperatureOne = data.list[1].main.temp;
      var windOne = data.list[1].wind.speed;
      var humidityOne = data.list[1].main.humidity;

      var dateInitial = data.list[2].dt_txt;
      var dateTwo = dateInitial.slice(0, 10);
      var temperatureTwo = data.list[2].main.temp;
      var windTwo = data.list[2].wind.speed;
      var humidityTwo = data.list[2].main.humidity;

      var dateInitial = data.list[3].dt_txt;
      var dateThree = dateInitial.slice(0, 10);
      var temperatureThree = data.list[3].main.temp;
      var windThree = data.list[3].wind.speed;
      var humidityThree = data.list[3].main.humidity;

      var dateInitial = data.list[4].dt_txt;
      var dateFour = dateInitial.slice(0, 10);
      var temperatureFour = data.list[4].main.temp;
      var windFour = data.list[4].wind.speed;
      var humidityFour = data.list[4].main.humidity;
      mainCityInfo(temperature, wind, humidity, date, temperatureOne, windOne, humidityOne, dateOne, temperatureTwo, windTwo, humidityTwo, dateTwo, temperatureThree, windThree, humidityThree, dateThree, temperatureFour, windFour, humidityFour, dateFour);
    })
    .catch(function (error) {
      console.log('Unable to connect to OpenWeather');
    });
  }

  function getCityDetails (cityName){
  var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=' + api;

    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Error: ' + response.statusText);
        }
      }).then(function (data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        getWeatherData(lat, lon);
      })
      .catch(function (error) {
        console.log('Unable to connect to OpenWeather',error);
      });
    }