/* eslint-disable no-console */
import moment from "moment";
// import WeatherIcon from "react-icons-weather";
import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { dt, main, weather, onSelect } = props;
  console.log("temperature", main.temp);
  console.log("description", weather[0].description);
  console.log("icon", weather[0].icon);
  console.log("date", dt);
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">
        {moment(dt).format("ddd Do MMM")}
      </div>
      <div id="icon" className="forecast-summery__icon">
        <img
          id="icon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="forecast-summary_temperature">
        {main.temp}
        &deg;C
      </div>
      <div className="forecast-summary_description">
        {weather[0].description}
      </div>

      <button onClick={() => onSelect(dt)} type="button" className="btn">
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  dt: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    description: PropTypes.string,
    main: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  icon: PropTypes.string.isRequired,
  main: PropTypes.shape({
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    temp: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
