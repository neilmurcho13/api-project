import React from "react";

const CityCard = ({ key, title, description, url, urlToImage }) => {
  return (
    <div className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
      <div className="card" style={{ opacity: 0.6 }}>
        <div className="card-header">
          <h4 className="card-header-title">
            <a href={url} rel="noopener noreferrer" target="_blank">
              {title}
            </a>
          </h4>
        </div>
        <div className="card-content">
          <h5>{description}</h5>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
