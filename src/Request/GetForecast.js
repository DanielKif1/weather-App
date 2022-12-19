import axios from "axios";

const GetForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  SearchText,
  setErrorMessage
) => {
  let endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${SearchText}&cnt=5&appid=52ccebefe6797aa1d891cdcc98467d5c&units=metric`;
  console.log("erroMess: ", setErrorMessage);
  if (SearchText) {
    endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${SearchText}&cnt=5&appid=52ccebefe6797aa1d891cdcc98467d5c&units=metric`;
  }
  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.list[0].dt_txt);
      setForecasts(response.data.list);
      setLocation(response.data.city);
      setErrorMessage(response.data.SearchText);
    })

    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        console.error("Server error", error);
      }
    });
};
export default GetForecast;
