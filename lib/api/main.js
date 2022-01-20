import client from "./client";
import { API } from "./restApi";

export const getComunityApi = ({ name }) => {
  return client.get(`${API}/${name}`);
};
export const getComunityInfoApi = ({ name }) => {
  return client.get(`${API}/${name}`);
};
