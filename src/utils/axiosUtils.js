import axios from "axios";

const timeoutInMs = 60 * 1000;
const baseUrl = process.env.API_URL;

const apiClient = axios.create({
  responseType: "json",
  timeout: timeoutInMs
});

const configureClient = client => {
  client.defaults.headers["Accept"] = "application/json";
  client.defaults.headers["Content-Type"] = "application/json";
};

const configurePublisherAppClient = client => {
  configureClient(client);
  client.defaults.baseURL = baseUrl;
};

let cachedAxios;

export function configureAxios() {
  configurePublisherAppClient(apiClient);

  cachedAxios = {
    default: apiClient
  };

  return cachedAxios;
}

export function getAxios() {
  return cachedAxios;
}
