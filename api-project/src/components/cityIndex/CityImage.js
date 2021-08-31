import React from "react";

const CityImage = ({ urls }) => {
    console.log({ urls })
    return (
        <figure>
            <img src={urls} alt="text" />
        </figure>
    );
};

export default CityImage;
