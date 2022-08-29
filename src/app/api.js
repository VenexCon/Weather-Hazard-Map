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
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${keyStorage.viewKey()}&units=metric`,
      { mode: "cors" }
    ); // fetch returns a promise
    const data = await response.json(); //.json() returns a promise.
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchWeather };
