import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ea90dde5b1mshcabfc1ed1630fdfp1232dcjsnf694c0abff8a";

export const fetchWeather = async (query) => {
  const settings = { params: { q: query, units: "metric", APPID: API_KEY } };
  const { data } = await axios.get(URL, settings);
  return data;
};
