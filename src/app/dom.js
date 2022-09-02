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

const removeHazards = () => {
  parent = document.querySelector(".hazard-list");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const isHigh = (value) => {
  //pass in the data response from fetchWeather();
  if (value > 20) {
    const highImg = document.createElement("i");
    highImg.setAttribute("class", "fa-solid fa-temperature-arrow-up");
    appendNewHazard(highImg);
  } else if (value < 10) {
    const lowImg = document.createElement("i");
    lowImg.setAttribute("class", "fa-solid fa-temperature-arrow-down");
    return appendNewHazard(lowImg);
  }
};

const isSunny = (value, time) => {
  if (value < 50) {
    const sunny = document.createElement("i");
    sunny.setAttribute("class", "fa-solid fa-sun");
    appendNewHazard(sunny);
  }
};
//create more funcs here,

//DOM Object for assigning and destructuring the Json.response.
const domAppend = (data) => {
  removeHazards();
  isHigh(data.main.temp);
  isSunny(data.clouds.all);
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
  const hazardChoice = document.createElement("div");
  hazardChoice.setAttribute("class", "hazard-choice");
  parent.appendChild(hazardChoice);
  return hazardChoice.appendChild(element);
};

const hazardChoices = (data) => {
  const average = document.querySelector("#averageBox");
  const high = document.querySelector(".data-high");
  const low = document.querySelector(".data-low");
  const feelsLike = document.querySelector(".data-feels");
  const humidity = document.querySelector(".data-humid");
};

export { navButton, domAppend };
