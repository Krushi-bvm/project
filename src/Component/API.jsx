import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// Add a request interceptor
API.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = "Bearer" + token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { API };
