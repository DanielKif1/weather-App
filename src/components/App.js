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
  const [SearchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.dt === selectedDate
  );

  useEffect(() => {
    GetForecast(setSelectedDate, setForecasts, setLocation, setSearchText);
  }, []);

  const handleForecastSelect = (dt) => {
    setSelectedDate(dt);
  };
  const handleCitySearch = () => {
    GetForecast(setSelectedDate, setForecasts, setLocation, SearchText);
  };
  console.log("forecasts: ", forecasts);
  return (
    <div className="weather-app">
      <LocationDetails
        className="location-details"
        city={location.name}
        country={location.country}
      />
      <SearchForm onSubmit={handleCitySearch} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <hr />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
