import React from "react";
import { NewDelhiWeather } from "../../lib/WeatherApi";
import WeatherCard from "../wetherCards/WeatherCard";

const DelhiWeatherComponent = () => {
  const [state, setState] = React.useState({
    delhiWeather: { weather: [{ description: "" }], main: { temp: "" } },
  });
  const fetchWeatherFromApi = async () => {
    try {
      const res = await NewDelhiWeather();
      setState({ delhiWeather: res.data });
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
          description={state.delhiWeather.weather[0].description}
          temp={state.delhiWeather.main.temp}
          feels_like={state.delhiWeather.main.feels_like}
        />
      </div>
    </section>
  );
};

export default DelhiWeatherComponent;
