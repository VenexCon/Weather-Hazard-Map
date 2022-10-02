import { domAppend } from "./dom";

const keyStorage = (() => {
  let API = `03ad2da940f7cc2ddc52d896bfa4deb4`;

  const viewKey = () => {
    return API;
  };

  return { viewKey };
})();

//Daily Forecast
const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${keyStorage.viewKey()}&units=metric`,
      { mode: "cors" }
    ); // fetch returns a promise
    let data = await response.json(); //.json() returns a promise.
    console.log(data);
    const forecast = fetchFiveForecast(data.coord.lat, data.coord.lon);
    return domAppend(data); // if you try and return data, it is called prior to awaiting
  } catch (error) {
    console.log(error);
    alert(`Location Not Found`);
  }
};

const fetchFiveForecast = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyStorage.viewKey()}`,
      { mode: "cors" }
    );
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getInput = (e) => {
  e.preventDefault();
  let input = document.querySelector(".searchBox").value;
  return input;
};

const form = document.querySelector(".search-container");
form.addEventListener("submit", (e) => {
  fetchWeather(getInput(e));
  fetchFiveForecast(getInput(e));
});

export { fetchWeather };
