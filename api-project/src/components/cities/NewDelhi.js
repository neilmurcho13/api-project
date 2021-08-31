import React from "react";
import { EverythingNewDelhi } from "../../lib/NewsApi";
import CityCard from "../cityIndex/CityCard";

const NewDehli = () => {
  const [state, setState] = React.useState({ newDelhiNews: [] });

  const fetchNewDelhiFromApi = async () => {
    try {
      const res = await EverythingNewDelhi();
      setState({ newDelhiNews: res.data.articles });
    } catch (err) {
      console.log("an error has occured fetching delhi news", err);
    }
  };
  React.useEffect(() => {
    fetchNewDelhiFromApi();
  }, []);
  console.log(state);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
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

export default NewDehli;
