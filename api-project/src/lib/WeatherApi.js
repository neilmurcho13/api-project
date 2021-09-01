import axios from "axios";

const baseUrl = "api.openweathermap.org/data/2.5/weather?";
const weatherApiKey = "&appid=b740588cd9dfbbb1af1d1384e52228a9";

export const LondonWeather = () => {
  return axios.get(`${baseUrl}q=london${weatherApiKey}`);
};
