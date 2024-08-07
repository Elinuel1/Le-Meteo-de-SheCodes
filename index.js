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
  let descriptionType = document.querySelector("#description");
  let humidityType = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let timeType = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityType.innerHTML = response.data.city;

  humidityType.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionType.innerHTML = response.data.condition.description;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  timeType.innerHTML = formatDate(date);

  temp.innerHTML = Math.round(theTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

citySearch("Accra");
