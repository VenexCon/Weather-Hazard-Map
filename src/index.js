import "./styles/style.scss";
import { navButton, displayToolTip } from "./app/dom";
import { fetchWeather } from "./app/api";

navButton();
fetchWeather(`barrow`);
displayToolTip(Event);
