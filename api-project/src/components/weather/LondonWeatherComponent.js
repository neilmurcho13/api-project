import React from "react";
import { LondonWeather } from "../../lib/WeatherApi";
import WeatherCard from "../wetherCards/WeatherCard";

const LondonWeatherComponent = () => {
  const [state, setState] = React.useState({
    londonWeather: { weather: [{ description: "" }], main: { temp: "" } },
  });
  const fetchWeatherFromApi = async () => {
    try {
      const res = await LondonWeather();
      setState({ londonWeather: res.data });
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
          description={state.londonWeather.weather[0].description}
          temp={state.londonWeather.main.temp}
          feels_like={state.londonWeather.main.feels_like}
        />
      </div>
    </section>
  );
};

export default LondonWeatherComponent;
