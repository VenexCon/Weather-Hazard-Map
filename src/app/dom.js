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

const displayToolTip = (e) => {
  const container = document.querySelector(".hazards-container");
  container.addEventListener("click", (e) => {
    console.log(e.target.parentElement.querySelector(".tooltip-text"));
    return e.target.parentElement
      .querySelector(".tooltip-text")
      .classList.toggle("active");
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

const appendNewHazard = (element, string) => {
  const parent = document.querySelector(".hazard-list");
  const hazardChoice = document.createElement("div");
  hazardChoice.setAttribute("class", "hazard-choice");
  parent.appendChild(hazardChoice);

  const tooltip = document.createElement("div");
  tooltip.setAttribute("class", "tooltip");

  const tooltipText = document.createElement("div");
  tooltipText.setAttribute("class", "tooltip-text");
  tooltipText.textContent = `${string}`;
  tooltip.appendChild(tooltipText);
  hazardChoice.appendChild(element);
  hazardChoice.appendChild(tooltip);
};

const hazardChoices = (data) => { // not currently used
  const average = document.querySelector("#averageBox");
  const high = document.querySelector(".data-high");
  const low = document.querySelector(".data-low");
  const feelsLike = document.querySelector(".data-feels");
  const humidity = document.querySelector(".data-humid");
};


const isHot = (value) => {
  const coldString =
    `Cold temperatures. Ensure you check weather conditions for driving, ensure tyre depth is more than 10mm. It is recommended to pack additional clothing and 
    warm drinks, prior to setting off.`;
  const hotString =
    `Warm Temperatures. Ensure you have an adequate amounts of water and sunblock for site working, heat stroke is a risk when working in warmer 
    weather.Adequate breaks should be taken throughout the day, ensuring that all employees look after eachother.`;
  if (value > 20) {
    const highImg = document.createElement("i");
    highImg.setAttribute("class", "fa-solid fa-temperature-arrow-up");
    appendNewHazard(highImg, hotString);
  } else if (value < 10) {
    const lowImg = document.createElement("i");
    lowImg.setAttribute("class", "fa-solid fa-temperature-arrow-down");
    return appendNewHazard(lowImg, coldString);
  }
};

isHot(34);

const isSunny = (value, time) => {
  const sunString = `Sunny weather presents a risk of UV radiation, which damages the skin and can cause burns, blisters, with chronic exposure leading to skin cancer
                      it is advised to wear long sleeves, apply sunblock factor(30 minimum) and to reapply every two hours. Tinted safety glasses should be worn.`
  if (value < 50) {
    const sunny = document.createElement("i");
    sunny.setAttribute("class", "fa-solid fa-sun");
    appendNewHazard(sunny, sunString);
  }
};

const isWindy = (value) => {
  const windString = `Wind conditions are currently above 20m per second, this presents a hazard when using access equipment and working at height. 
  You should review all planned lifts, site works and working practices to identify control measures for newly present hazards. `
  if (value > 20) {
    const windIcon = document.createElement("i");
    windIcon.setAttribute("class", "fa-solid fa-wind");
    appendNewHazard(windIcon, windString);
  }
  return;
};

const isSnowing = (string) => {
const snowString = `Conditions are currently snowy, and as such all long journeys, and large plant movements should be reviewed in light of the new hazards.
It is recommended to not travel wear possible, and to ensure that where travel is required, you pack additional warm clothing, a hot drink, and food. Be aware, breakdown
recovery times can be longer, or you may not be recovered at all during snowy conditions. `
  if (string.includes("snow")) {
    const snowIcon = document.createElement("i");
    snowIcon.setAttribute("class", "fa-solid fa-snowflake");
    appendNewHazard(snowIcon, snowString);
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
  console.log(hour)
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

export { navButton, domAppend, displayToolTip };
