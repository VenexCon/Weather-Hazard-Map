import { domAppend } from "./dom";

const keyStorage = (() => {
  let API = `03ad2da940f7cc2ddc52d896bfa4deb4`;

  const viewKey = () => {
    return API;
  };

  return { viewKey };
})();

const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${keyStorage.viewKey()}&units=metric`,
      { mode: "cors" }
    ); // fetch returns a promise
    let data = await response.json(); //.json() returns a promise.
    console.log(data);
    return domAppend(data); // if you try and return data, it is called prior to awaiting
  } catch (error) {
    console.log(error);
    alert(`Location Not Found`);
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
});

//do i need ot return it here? the function needs to be called
//pass that to a object, that can be destructured.
//this can all happen in the EL.
//need a function that takes the object resposne, destructure it, and then assign it to the dom Object.

export { fetchWeather };
