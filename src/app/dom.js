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

/* ----------- */
/* Formatters */
/* --------- */

const formatUnixDate = (string) => {
  let newdate = new Date(string * 1000);
  newdate.toLocaleString();
  return format(newdate, `k:mm dd/MM/yyyy`);
};

const getHours = (value) => {
  const hours = new Date(value * 1000).getHours();
  console.log(hours);
  return hours;
};

const removeHazards = () => {
  parent = document.querySelector(".hazard-list");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

/* ----------------------- */
/* Hazard Condition Funcs */
/* --------------------- */

const isHot = (value) => {
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
  if (value < 50 && time > 6 && time < 21) {
    const sunny = document.createElement("i");
    sunny.setAttribute("class", "fa-solid fa-sun");
    appendNewHazard(sunny);
  }
};

const isWindy = (value) => {
  if (value > 20) {
    const windIcon = document.createElement("i");
    windIcon.setAttribute("class", "fa-solid fa-wind");
    appendNewHazard(windIcon);
  }
  return;
};

const isSnowing = (string) => {
  if (string.includes("snow")) {
    const snowIcon = document.createElement("i");
    snowIcon.setAttribute("class", "fa-solid fa-snowflake");
    appendNewHazard(snowIcon);
  }
};

const isLowVisibility = (value) => {
  if (value < 100) {
    const lowVisIcon = document.createElement("i");
    lowVisIcon.setAttribute("class", "fa-solid fa-eye-slash");
    appendNewHazard(lowVisIcon);
  }
};

const isThunder = (string) => {
  if (string.includes("storm")) {
    thunderIcon = document.createElement("i");
    thunderIcon.setAttribute("class", "fa-solid fa-cloud-bolt");
  }
};

/* ----------------------------------------------------------- */
//DOM Object for assigning and destructuring the Json.response.
/* --------------------------------------------------------- */

const domAppend = (data) => {
  const hour = getHours(data.dt);
  const degree = `\u00B0C`;
  const farenheight = `\u00B0`;
  const dataIcon = `${data.weather[0].icon}`;
  removeHazards();
  isHot(data.main.temp);
  isSunny(data.clouds.all, hour);
  isWindy(data.wind.speed);
  isSnowing(data.weather[0].main);
  isLowVisibility(data.visibility);
  isThunder(data.weather[0].main);

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
