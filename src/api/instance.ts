import axios from "axios";

const userToken = localStorage.getItem("user");
const authToken = userToken ? `Bearer ${JSON.parse(userToken)}` : "";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Authorization: authToken,
  },
});

export default instance;
