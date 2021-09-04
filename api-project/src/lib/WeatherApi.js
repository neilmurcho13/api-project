import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const weatherApiKey = "&appid=b740588cd9dfbbb1af1d1384e52228a9";

export const LondonWeather = () => {
  return axios.get(`${baseUrl}q=London,uk${weatherApiKey}`);
};

export const NewYorkWeather = () => {
  return axios.get(`${baseUrl}q=new york${weatherApiKey}`);
};

export const NewDelhiWeather = () => {
  return axios.get(`${baseUrl}q=Delhi${weatherApiKey}`);
};
