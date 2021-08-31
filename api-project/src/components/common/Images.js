/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";

const Images = () => {
    const [image, setImage] = useState('');
    const clientId = "6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";
    const [res, setResult] = useState([]);

    const handleChange = (event) => {
        setImage(event.target.value);
    };

    const handleSubmit = () => {
        const url = "https://api.unsplash.com/search/photos?page=1&query=london&client_id=6k136JwV_dwrymURjd83Vd_TgmGRJzl_FMbNWHpGvOI";
        axios.get(url).then((res) => {
            setResult(res.data.results);
            console.log(setResult(res.data.results));
        });
    };

    return (
        <section>
            <input
                onChange={handleChange}
                type="text"
                name="image"
                placeholder="Search for images" />
            <button onClick={handleSubmit} type="submit">
                Search
            </button>
        </section>
    );
};

export default Images;
