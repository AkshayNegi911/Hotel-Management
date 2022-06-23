// CONFIGURATION FILE OF AXIOS
import axios from "axios";

// #1 http for normal purpose
const http = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// #2 http for file purpose
const httpFile = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export { http, httpFile };
