import axios from "axios";

export const axiosInstance = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api",
  withCredentials: true,
});
