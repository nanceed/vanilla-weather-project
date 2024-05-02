function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;

}


function searchCity(city) {
  let apiKey = "0f09c464cb3936o320tabf9addd38da4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}


function showSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", showSearchSubmit);

searchCity("San Francisco");