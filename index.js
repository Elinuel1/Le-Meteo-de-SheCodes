function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  citySearch(searchInput.value);
}

function citySearch(city) {
  let apiKey = "c975fbd5fa806t4bd321abo0a3b3cb58";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
  let temp = document.querySelector("#temperature");
  let theTemperature = response.data.temperature.current;
  let cityType = document.querySelector("#city");

  cityType.innerHTML = response.data.city;
  temp.innerHTML = Math.round(theTemperature);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

citySearch("Accra");
