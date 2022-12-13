/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { dt, main, wind, weather } = forecast;

  console.log({ forecast });

  return (
    <div className="forecast-details">
      <div className="forecast-details_date">
        {moment(dt).format("ddd Do MMM")}
      </div>
      <div className="forecast-details_temperature">
        <div>temperature</div>&nbsp;
        {main.temp_max}&nbsp;&nbsp;
        {main.temp_min}
        &deg;C
      </div>

      <div className="forecast-details_humidity">
        <div>humidity:</div>
        <div> {main.humidity}</div>
      </div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        {weather.icon}
      </div>
      <div className="forecast-details_wind">
        <div>wind:</div>
        <div>{wind.speed}</div>
        <div>{wind.deg}</div>
        <div>{wind.gust}</div>
      </div>
    </div>
  );
}

export default ForecastDetails;
