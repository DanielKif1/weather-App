import React from "react";

import PropTypes from "prop-types";

function LocationDetails({ city, country, errorMessage }) {
  // const { city, country } = props;
  console.log("message", errorMessage);

  return errorMessage ? (
    <h1> {errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}  ${country} `}</h1>
  );
}
LocationDetails.defaultProps = {
  errorMessage: "",
};
LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
export default LocationDetails;
