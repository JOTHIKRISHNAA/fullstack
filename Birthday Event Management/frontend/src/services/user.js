import instance from "./axios";

const api_uri = "http://localhost:8181";
export const addon = (data) => instance.post(`${api_uri}/api/v1/addon/insert`, data);