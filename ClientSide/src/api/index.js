import axios from "axios";

let config;
let API;

async function initializeAPI() {
  if (!config) {
    config = await fetch("/config.json").then(res => res.json());
    
    API = axios.create({
      baseURL: config.API_BASE_URL,
    });
  }
  return API;
}

const apiPromise = initializeAPI();
export default apiPromise;
export { initializeAPI };