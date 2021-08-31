import axios from "axios";

const baseUrl = "https://newsapi.org/v2/everything?";
const newsApiKey = "&apiKey=bb9fc9b6b8af4a6bab3079213d4c4c9d";

export const EverythingLondon = () => {
  return axios.get(`${baseUrl}q=london${newsApiKey}`);
};
