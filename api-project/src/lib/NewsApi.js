import axios from "axios";

const baseUrl = "https://newsapi.org/v2/everything?";
const newsApiKey = "&apiKey=bb9fc9b6b8af4a6bab3079213d4c4c9d";

export const EverythingLondon = () => {
  return axios.get(`${baseUrl}q=london&pageSize=3&page=1${newsApiKey}`);
};

export const EverythingNewYork = () => {
  return axios.get(`${baseUrl}q=newyork&pageSize=3&page=1${newsApiKey}`);
};

export const EverythingNewDelhi = () => {
  return axios.get(
    `${baseUrl}q=dehli&pageSize=3&page=1&language=en${newsApiKey}`
  );
};
