import React from 'react';
import { EverythingLondon } from '../../lib/NewsApi';
import LondonWeatherComponent from '../weather/LondonWeatherComponent';
import CityCard from '../cityIndex/CityCard';

const London = () => {
  const [state, setState] = React.useState({ londonNews: [] });

  const fetchLondonFromApi = async () => {
    try {
      const res = await EverythingLondon();
      setState({ londonNews: res.data.articles });
    } catch (err) {
      console.log('an error has occured fetching London news', err);
    }
  };
  React.useEffect(() => {
    fetchLondonFromApi();
  }, []);

  return (
    <section className="section">
      {/* <LondonImage /> */}

      <LondonWeatherComponent />

      <div className="container">

        <div className="columns is-multiline">
          {state.londonNews.map((london) => (
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
      {/* </LondonImage> */}
    </section>
  );
};

export default London;
