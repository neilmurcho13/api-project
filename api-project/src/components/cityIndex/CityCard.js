import React from "react";

const CityCard = ({ key, title, description, url, urlToImage }) => {
  console.log({ key, title, description, url, urlToImage });
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      {/* <a href={url}> */}
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{title}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={urlToImage}
              alt={title}
              loading="lazy"
              width="255"
              height="255"
            ></img>
          </figure>
        </div>

        <div className="card-content">
          <h5>{description}</h5>
        </div>

        <div className="card-content">
          <a href={url} rel="noopener noreferrer" target="_blank">
            <h5>READ ARTICLE</h5>
          </a>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default CityCard;
