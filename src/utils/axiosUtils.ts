import axios from "axios";
import { AxiosInstance } from "axios";
import { HttpClient } from "../lib/interfaces";

const timeoutInMs = 60 * 1000;
const baseUrl = process.env.API_URL;

const apiClient = axios.create({
  responseType: "json",
  timeout: timeoutInMs
});

const configureClient = (client : AxiosInstance) => {
  client.defaults.headers["Accept"] = "application/json";
  client.defaults.headers["Content-Type"] = "application/json";
};

const configurePublisherAppClient = (apiClient : AxiosInstance) => {
  configureClient(apiClient);
  apiClient.defaults.baseURL = baseUrl;
};

let cachedAxios : HttpClient;

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
