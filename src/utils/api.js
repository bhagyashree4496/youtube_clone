// import axios from "axios";
// const BASE_URL = "https://youtube138.p.rapidapi.com";
// const options = {
//   params: {
//     hl: "en",
//     gl: "US",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_RAPIDAPIKEY,
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

// export const fetchDataFromApi = async (url) => {
//   const { data } = await axios.get(
//     `https://youtube138.p.rapidapi.com/home/`,
//     options
//   );
//   console.log(data);
//   return data;
// };
// import axios from "axios";
// export const fetchDataFromApi = async (category) => {
//   const options = {
//     method: "GET",
//     url: `https://youtube138.p.rapidapi.com/${category}/`,
//     params: { hl: "en", gl: "US" },
//     headers: {
//       "X-RapidAPI-Key": "9be866ba69msha36bd7093ba1a0dp1c95abjsn0a129d778db6",
//       "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//     },
//   };

//   const response = await axios.request(options);
//   console.log(response.data);
//   return response.data;
// };
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "c74a8a8d2dmsh2e610e7a787491ap110d7bjsn3b0257688038",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
