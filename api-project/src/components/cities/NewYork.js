import React from "react";
import { EverythingNewYork } from "../../lib/NewsApi";
import CityCard from "../cityIndex/CityCard";

const NewYork = () => {
  const [state, setState] = React.useState({ newYorkNews: [] });

  const fetchNewYorkFromApi = async () => {
    try {
      const res = await EverythingNewYork();
      setState({ newYorkNews: res.data.articles });
    } catch (err) {
      console.log("an error has occured fetching newyork news", err);
    }
  };
  React.useEffect(() => {
    fetchNewYorkFromApi();
  }, []);
  console.log(state);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.newYorkNews.map((newyork) => (
            <CityCard
              title={newyork.title}
              description={newyork.description}
              url={newyork.url}
              urlToImage={newyork.urlToImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewYork;
