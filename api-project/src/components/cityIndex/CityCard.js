import React from "react";

const CityCard = ({ title, description, url }) => {
  console.log({ title, description, url });
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <a href={url}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{title}</h4>
          </div>

          <div className="card-content">
            <h5>{description}</h5>
          </div>

          <div className="card-content">
            <a href={url}>
              <h5>READ ARTICLE</h5>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CityCard;
