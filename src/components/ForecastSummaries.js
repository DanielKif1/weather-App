/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";
// import ForecastDetails from "./ForecastDetails";

/* eslint-disable  no-unused-vars */
function ForecastSummaries({ forecasts }) {
  console.log({ forecasts });

  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}
ForecastSummaries.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
};

export default ForecastSummaries;
