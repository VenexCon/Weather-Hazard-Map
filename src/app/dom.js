import { fetchWeather } from "./api";
import format from "date-fns/format";

const navButton = () => {
  const Btn = document.querySelector(".nav-btn");
  const aside = document.querySelector(".nav-links");
  const btnImg = document.querySelector(".nav-btn > img");

  return Btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    btnImg.classList.toggle("active");
  });
};

const formatUnixDate = (string) => {
  let newdate = new Date(string * 1000);
  newdate.toLocaleString();
  return format(newdate, `k:m dd/MM/yyyy`);
};
window.navigator.geolocation.getCurrentPosition(console.log, console.log);

//DOM Object for assigning and destructuring the Json.response.
const domAppend = (data) => {
  const degree = `\u00B0C`;
  const farenheight = `\u00B0`;
  const dataIcon = `${data.weather[0].icon}`;

  //sets title
  const location = document.querySelector(".title");
  console.log(data.name);
  location.innerText = `${data.name}, ${data.sys.country}`;

  //sets weather description
  const description = document.querySelector(".description");
  description.innerText = `${data.weather[0].description}`;

  //calls formatDate func and returns local time
  const timeStamp = document.querySelector(".data-time");
  timeStamp.innerText = `Time Requested: ${formatUnixDate(data.dt)}`;
  //sets average, high & low temp
  const average = document.querySelector("#averageBox");
  const high = document.querySelector(".data-high");
  const low = document.querySelector(".data-low");
  const feelsLike = document.querySelector(".data-feels");
  const humidity = document.querySelector(".data-humid");
  average.innerText = `${data.main.temp}${degree}`;
  high.innerText = `${data.main.temp_max}${degree}`;
  low.innerText = `${data.main.temp_min}${degree}`;
  feelsLike.innerText = `${data.main.feels_like}${degree}`;
  humidity.innerText = `${data.main.humidity}%`;
  //sets feels-like

  //sets weather Icon
  const weatherIcon = document.querySelector(".weather-img");
  weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}@2x.png`;
};

//Hazard Selection Funcs
const appendNewHazard = (element) => {
  const parent = document.querySelector(".hazard-list");
  parent.appendChild(element);
};

const isHigh = (value) => {
  if (value > 20) {
    //create element with upwards temp
    //return new element & text, append to hazardlist with func
  } else if (value < 10) {
    //show low arrow
  }
};

const hazardChoices = (data) => {
  const average = document.querySelector("#averageBox");
  const high = document.querySelector(".data-high");
  const low = document.querySelector(".data-low");
  const feelsLike = document.querySelector(".data-feels");
  const humidity = document.querySelector(".data-humid");
};

export { navButton, domAppend };
