import axios from "axios";

const GetForecast = async (setSelectedDate, setForecasts, setLocation) => {
  const endpoint =
    "http://api.openweathermap.org/data/2.5/forecast?q=lubumbashi,+243&cnt=5&appid=52ccebefe6797aa1d891cdcc98467d5c&units=metric";
  // "https://api.openweathermap.org/data/2.5/forecast?q=manchester&cnt=5&appid=52ccebefe6797aa1d891cdcc98467d5c&units=metric";

  axios.get(endpoint).then((response) => {
    console.log("response", response);
    // searchText;
    setSelectedDate(response.data.list[0].dt);
    setForecasts(response.data.list);
    setLocation(response.data.city);
  });
};
export default GetForecast;
// const GetForecast = (
//   searchText,
//   setSelectedDate,
//   setForecasts,
//   setLocation
// ) => {
//   let endpoint =
//     "http://api.openweathermap.org/data/2.5/forecast?q=lubumbashi,+243&cnt=5&appid=52ccebefe6797aa1d891cdcc98467d5c&units=metric";
//   if (searchText) {
//     endpoint += `?city=${searchText}`;
//   }

//   return axios.get(endpoint).then((response) => {
//     console.log("req", response);
//     setSelectedDate(response.data.list[0].dt);
//     setForecasts(response.data.list);
//     setLocation(response.data.city);
//   });
// };
