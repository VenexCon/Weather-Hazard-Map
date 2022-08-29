import { fetchWeather } from "./api";

const navButton = () => {
  const Btn = document.querySelector(".nav-btn");
  const aside = document.querySelector(".nav-links");
  const btnImg = document.querySelector(".nav-btn > img");

  return Btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    btnImg.classList.toggle("active");
  });
};

//DOM Object for assigning and destructuring the Json.response.

const response = (object) => {};

export { navButton };
