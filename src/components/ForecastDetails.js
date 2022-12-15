/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { dt, main, wind, weather } = forecast;

  return (
    <div className="forecast-details">
      <div className="forecast-details_date">
        {moment(dt).format("ddd Do MMM")}
      </div>
      <div id="icon" className="forecast-summery__icon">
        <img
          id="icon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="forecast-details_temperature">
        <div>temperature</div>&nbsp;
        {main.temp_max}&nbsp;&nbsp;
        {main.temp_min}
        &deg;C
      </div>

      <div className="forecast-details_humidity">
        <div>humidity: {main.humidity}</div>
      </div>

      <div className="forecast-details_wind">
        <div>wind: {wind.speed}</div>
      </div>
    </div>
  );
}

export default ForecastDetails;
