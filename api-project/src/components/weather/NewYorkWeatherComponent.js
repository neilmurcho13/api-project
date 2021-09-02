import React from "react";
import { NewYorkWeather } from "../../lib/WeatherApi";
import WeatherCard from "../wetherCards/WeatherCard";

const NewYorkWeatherComponent = () => {
  const [state, setState] = React.useState({
    newYorkWeather: { weather: [{ description: "" }], main: { temp: "" } },
  });
  const fetchWeatherFromApi = async () => {
    try {
      const res = await NewYorkWeather();
      setState({ newYorkWeather: res.data });
    } catch (err) {
      console.log("an error has occured fetching weather api", err);
    }
  };
  React.useEffect(() => {
    fetchWeatherFromApi();
  }, []);
  console.log("weather state", state);

  return (
    <section className="section">
      <div clas="container">
        <WeatherCard
          description={state.newYorkWeather.weather[0].description}
          temp={state.newYorkWeather.main.temp}
          feels_like={state.newYorkWeather.main.feels_like}
        />
      </div>
    </section>
  );
};

export default NewYorkWeatherComponent;
