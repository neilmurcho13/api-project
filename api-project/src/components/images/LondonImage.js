/* eslint-disable no-unused-vars */
import React from "react";
import { getPhotosLondon } from "../../lib/ImageApi";
import CityImage from "../cityIndex/CityImage";

const randomNumberGenerator = (arrayLength) => {
  const randomNumber = Math.ceil(Math.random() * arrayLength);
  return randomNumber;
};

const LondonImages = () => {
  const [state, setState] = React.useState({
    unsplashImageLondon: { urls: { small: "" }, alt_description: "" },
  });
  // const [image, setImage] = React.useState("")

  // const clientId = "6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";

  const fetchImageFromApi = async () => {
    console.log("attempting to fetch");
    try {
      const res = await getPhotosLondon();
      console.log("res", res);
      const randomNumber = randomNumberGenerator(res.data.results.length);
      console.log("results", res.data.results);
      setState({ unsplashImageLondon: res.data.results[randomNumber] });
    } catch (err) {
      console.log("error has occurred fetching image", err);
    }
  };

  React.useEffect(() => {
    fetchImageFromApi();
  }, []);
  console.log("state is", state);

  return (
    <div className="container">
      <div className="result">
        <CityImage
          urls={state.unsplashImageLondon.urls.full}
          image_description={state.unsplashImageLondon.alt_description}
        />
      </div>
    </div>
  );
};

export default LondonImages;
