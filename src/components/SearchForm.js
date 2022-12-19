import PropTypes from "prop-types";
import React from "react";
import "../styles/Search.css";

// eslint-disable-next-line react/prop-types
function SearchForm({ SearchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <label> Enter the city name here: </label>
      <input
        type="text"
        placeholder="city name here"
        onChange={handleInputChange}
        value={SearchText}
        className="txt-input"
        id="txt-input"
      />

      <button type="submit" onClick={onSubmit} className="btn-submit">
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
