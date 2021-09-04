import React from "react";

const CityImage = ({ urls, image_description, blur_hash }) => {
    console.log("these are the URLS", { urls })
    return (
        <figure>
            <div class="card">
                <div class="card-image">
                    <img src={urls} alt="text" blurhash={blur_hash} />
                    <span class="card-title" >City Name</span>
                </div>
            </div>
            {/* <img src={urls} alt="text" />
            <p>Image of {image_description}</p> */}
        </figure>
    );
};

export default CityImage;
