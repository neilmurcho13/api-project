/* eslint-disable no-unused-vars */
import React from 'react';
import { getPhotos } from '../../lib/ImageApi';
import CityImage from '../cityIndex/CityImage';

export const randomNumberGenerator = (arrayLength) => {
  const randomNumber = Math.ceil(Math.random() * arrayLength);
  return randomNumber;
};

const Images = () => {
  const [state, setState] = React.useState({
    unsplashImage: { urls: { small: '' }, alt_description: '', blur_hash: '' },
  });
  // const [image, setImage] = React.useState("")

  // const clientId = "6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";

  const fetchImageFromApi = async () => {
    console.log('attempting to fetch');
    try {
      const res = await getPhotos();
      console.log('res', res);
      const randomNumber = randomNumberGenerator(res.data.results.length);
      console.log('results', res.data.results);
      setState({ unsplashImage: res.data.results[randomNumber] });
    } catch (err) {
      console.log('error has occurred fetching image', err);
    }
  };

  React.useEffect(() => {
    fetchImageFromApi();
  }, []);
  console.log('state is', state);
  return (
    <div className="result">
      <CityImage
        urls={state.unsplashImage.urls.full}
        image_description={state.unsplashImage.alt_description}
        blur_hash={state.unsplashImage.blur_hash}
      />
    </div>
  );
};

export default Images;
