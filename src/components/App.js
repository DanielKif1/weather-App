import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import ForecastSummaries from "./ForecastSummaries";
import GetForecast from "../Request/GetForecast";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ name: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [SearchText, setSearchText] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.dt_txt === selectedDate
  );

  useEffect(() => {
    GetForecast(setSelectedDate, setForecasts, setLocation, setErrorMessage);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    GetForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      SearchText,
      setErrorMessage
    );
  };

  return (
    <div className="weather-app">
      <LocationDetails
        className="location-details"
        city={location.name}
        country={location.country}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />

      <SearchForm
        SearchText={SearchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          <hr className="line" />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
