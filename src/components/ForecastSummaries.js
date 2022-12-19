/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

/* eslint-disable  no-unused-vars */
function ForecastSummaries({ forecasts, onForecastSelect }) {
  console.log("edcrfvtygb", forecasts);
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.dt}
          forecast={forecast}
          // dt={forecast.dt_txt}
          // weather={forecast.weather}
          // icon={forecast.icon}
          onSelect={onForecastSelect}
          // main={forecast.main}
        />
      ))}
    </div>
  );
}
// ForecastSummaries.propTypes = {
//   date: PropTypes.string.isRequired,
//  list: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   temperature: PropTypes.shape({
//     max: PropTypes.number,
//     min: PropTypes.number,
//   }).isRequired,
//   onForecastSelect: PropTypes.func.isRequired,
// };

export default ForecastSummaries;
