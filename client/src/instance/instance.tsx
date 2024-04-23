import axios, { AxiosInstance } from "axios";

//-----------------Instance-----------------//

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default instance;