import React from "react";

const CityImage = ({ urls, image_description, blur_hash }) => {
    console.log("these are the URLS", { urls })
    return (
        <figure>
            <div class="card">
                <div class="card-image">
                    <img src={urls} alt="text" blurhash={blur_hash} />

                </div>
                <div class="card-content">
                    <h1>LONDON</h1>
                </div>
            </div>
            {/* <img src={urls} alt="text" />
            <p>Image of {image_description}</p> */}
        </figure>
    );
};

export default CityImage;
