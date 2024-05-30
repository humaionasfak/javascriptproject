const cityName = document.querySelector(".weather-city");
const weatherDate = document.querySelector(".weather-date");
const weatherForecast = document.querySelector(".weather-forecast");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemperature = document.querySelector(".weather-temperature");
const weatherMin = document.querySelector(".weather-min");
const weatherMax = document.querySelector(".weather-max");
const weatherFeelLike = document.querySelector(".weather-feel-like");
const weatherHumidity = document.querySelector(".weather-humidity");
const weatherWind = document.querySelector(".weather-wind");
const weatherPressure = document.querySelector(".weather-pressure");
const input = document.querySelector(".input");
const citySearch = document.querySelector(".weather-search");
// get full country name
const getCountryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};
// to get the date
const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000);
  console.log(curDate);
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-US", option);
  return formatter.format(curDate);
};

let city = "dhaka";
citySearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let getCity = input.value;

  city = getCity;
  console.log(city);
  getWeatherData();
  input.value = null;
});
const getWeatherData = async () => {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e27089492e422065232af78b092931ad`;
  try {
    const res = await fetch(weatherApi);
    const data = await res.json();
    const { main, name, weather, wind, sys, dt } = data;
    cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
    console.log(data);
    weatherForecast.innerHTML = weather[0].main;
    weatherIcon.innerHTML = `<img class="img" src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;
    weatherDate.innerText = getDateTime(dt);
    weatherTemperature.innerHTML = `${main.temp}&#176`;
    weatherMin.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
    weatherMax.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;
    weatherFeelLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
    weatherHumidity.innerHTML = `${main.humidity}%`;
    weatherWind.innerHTML = `${wind.speed} m/s`;
    weatherPressure.innerHTML = `${main.pressure} hPa`;
  } catch (error) {
    console.log(error);
    alert("city name is not found");
  }
};

document.body.addEventListener("load", getWeatherData());
