import "./styles/style.scss";
import { navButton } from "./app/dom";
import { fetchWeather } from "./app/api";

navButton();
fetchWeather(`london`);
