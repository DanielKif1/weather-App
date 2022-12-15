/* eslint-disable no-console */
import moment from "moment";
// import WeatherIcon from "react-icons-weather";
import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  // const { dt_txt, main, weather, onSelect }rops= props;
  const date = props.forecast.dt_txt;
  const weather = props.forecast.weather;
  const main = props.forecast.main;
  const { icon } = props.forecast;
  const onSelect = props.onSelect;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">
        {moment(date).format("ddd Do MMM,h:mm:ss a")}
      </div>
      <div id="icon" className="forecast-summery__icon">
        <img
          id="icon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="forecast-summary_temperature">
        {main.temp_max}
        &deg;C
      </div>
      <div className="forecast-summary_description">
        {weather[0].description}
      </div>

      <button onClick={() => onSelect(date)} type="button" className="btn">
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  dt_txt: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    description: PropTypes.string,
    main: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  icon: PropTypes.string.isRequired,
  main: PropTypes.shape({
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
