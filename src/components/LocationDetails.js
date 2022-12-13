import React from "react";

import PropTypes from "prop-types";

function LocationDetails({ city, country }) {
  // const { city, country } = props;
  return (
    <div>
      <h1>{`${city}, ${country}, `}</h1>
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
export default LocationDetails;
