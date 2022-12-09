import React from "react";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind, icon } = forecast;
  console.log({ forecast });
  return (
    <div className="forecast-details">
      <div className="forecast-details_date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details_temperature">
        <div>temperature</div>&nbsp;
        {temperature.max}&nbsp;&nbsp;
        {temperature.min}
        &deg;C
      </div>

      <div className="forecast-details_humidity">
        <div>humidity:</div>&nbsp;
        <div> {humidity}</div>
      </div>
      <div className="forecast-details_wind">
        <div>wind:</div>&nbsp;
        <div>{wind.speed}</div>
        <div>{wind.direction}</div>
        &deg;C
      </div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
    </div>
  );
}

export default ForecastDetails;
