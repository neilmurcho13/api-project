import React from "react";

const WeatherCard = ({ description, icon, temp, feels_like }) => {
  console.log({ description, icon, temp, feels_like });
  return (
    <div className="container">
      <div className="card" style={{ opacity: 0.6 }}>
        <div className="card-header">
          <h4 className="card-header-title">Live Weather</h4>
        </div>
        <div className="card-content">
          <h5>
            Current Weather - {description}
            {icon}
          </h5>

          <h5>Temperature is {temp}</h5>
          <p>Feels like {feels_like}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
