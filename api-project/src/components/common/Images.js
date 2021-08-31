/* eslint-disable no-unused-vars */
import React from "react";
import { ImageExport } from "./ImageApi";
import CityImage from "../cityIndex/CityImage";

const Images = () => {
    const [state, setState] = React.useState({ unsplashImage: [] });
    // const [image, setImage] = React.useState("")

    // const clientId = "6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";

    const fetchImageFromApi = async () => {
        try {
            const res = await ImageExport()
            setState({ unsplashImage: res.data.results })
        } catch (err) {
            console.log("error has occurred fetching image", err)
        }
    }

    React.useEffect(() => { fetchImageFromApi() }, [])
    console.log(state);

    return (
        <div className="result" >
            {state.unsplashImage.map((newYork) => (

                <CityImage
                    urls={newYork.urls.thumb} />
            ))}
        </div>
    )

    // publishImage()

    // const handleChange = (event) => {
    //     setImage(event.target.value);
    // };


    // const handleSubmit = () => {
    //     const url = "https://api.unsplash.com/search/photos?page=1&query=london&client_id=6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";
    //     axios.get(url).then((res) => {
    //         setResult(res.data.results);
    //         console.log("setResults" + setResult(res.data.results));
    //     });
    // };

    // <section>
    //     <input
    //         onChange={handleChange}
    //         type="text"
    //         name="image"
    //         placeholder="Search for images" />
    //     <button onClick={handleSubmit} type="submit">
    //         Search
    //     </button>
    // </section>

}

export default Images;
