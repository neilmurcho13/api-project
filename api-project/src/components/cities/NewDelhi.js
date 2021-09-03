import React from "react";
import { EverythingNewDelhi } from "../../lib/NewsApi";
import CityCard from "../cityIndex/CityCard";
import CityImage from "../cityIndex/CityImage";
import DelhiImages from "../images/DelhiImages";
import DelhiWeatherComponent from "../weather/DelhiWeatherComponent";

const NewDelhi = () => {
  const [state, setState] = React.useState({ newDelhiNews: [] });

  const fetchNewDelhiFromApi = async () => {
    try {
      const res = await EverythingNewDelhi();
      setState({ newDelhiNews: res.data.articles });
    } catch (err) {
      console.log("an error has occurred fetching delhi news", err);
    }
  };
  React.useEffect(() => {
    fetchNewDelhiFromApi();
  }, []);
  console.log(state);
  return (
    <section className="section">
      <DelhiImages />
      <DelhiWeatherComponent />
      <div className="container">
        <div className="columns is-multiline">
          {/* <CityImage />
          <CityImage
            urls={state.unsplashImage.urls.full}
            image_description={state.unsplashImage.alt_description} /> */}
          {state.newDelhiNews.map((newDelhi) => (
            <CityCard
              key={newDelhi.key}
              title={newDelhi.title}
              description={newDelhi.description}
              url={newDelhi.url}
              urlToImage={newDelhi.urlToImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDelhi;
