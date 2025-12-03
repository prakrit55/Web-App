import axios from "axios";

let config = await fetch("/config.json").then(res => res.json());

const API = axios.create({
  baseURL: config.API_BASE_URL,
});

export default API;
