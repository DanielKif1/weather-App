import PropTypes from "prop-types";
import React from "react";

// eslint-disable-next-line react/prop-types
function SearchForm({ SearchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="city name here"
        onChange={handleInputChange}
        value={SearchText}
      />

      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.prototype = {
  SearchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
