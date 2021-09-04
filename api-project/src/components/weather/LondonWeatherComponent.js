import React from "react";
import { LondonWeather } from "../../lib/WeatherApi";
import WeatherCard from "../wetherCards/WeatherCard";
import { getPhotosLondon } from "../../lib/ImageApi";
import { randomNumberGenerator } from "../images/Images";
import { EverythingLondon } from "../../lib/NewsApi";
import CityCard from "../cityIndex/CityCard";

const LondonWeatherComponent = () => {
  const [state, setState] = React.useState({
    londonWeather: { weather: [{ description: "" }], main: { temp: "" } },
  });
  const [bgImage, setBgimage] = React.useState("");

  // fetches a photo of london and sets it to state. The state is then used as the background image of the
  // section that wraps the information
  React.useEffect(() => {
    (async () => {
      const res = await getPhotosLondon();
      const randomNumber = randomNumberGenerator(res.data.results.length);
      const randomImage = res.data.results[randomNumber].urls.regular;
      setBgimage(randomImage);
    })();
  }, []);

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

  const [londonState, setLondonState] = React.useState({ londonNews: [] });

  const fetchLondonFromApi = async () => {
    try {
      const res = await EverythingLondon();
      setLondonState({ londonNews: res.data.articles });
    } catch (err) {
      console.log("an error has occured fetching London news", err);
    }
  };
  React.useEffect(() => {
    fetchLondonFromApi();
  }, []);

  return (
    <section
      className="section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div clas="container">
        <WeatherCard
          description={state.londonWeather.weather[0].description}
          icon={state.londonWeather.weather[0].icon}
          temp={state.londonWeather.main.temp}
          feels_like={state.londonWeather.main.feels_like}
        />
      </div>
      <hr></hr>
      <div className="container">
        <div className="columns is-multiline">
          {londonState.londonNews.map((london) => (
            <CityCard
              key={london.key}
              title={london.title}
              description={london.description}
              source={london.source}
              url={london.url}
              urlToImage={london.urlToImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonWeatherComponent;
