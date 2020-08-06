import axios from "axios";

const API_ROOT = "https://5f282cebf5d27e001612ed10.mockapi.io";

const client = axios.create({
  baseURL: API_ROOT,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const getData = (path) => {
  const data = client.get(path).then((response) => response.data);
  return data;
};
const postData = (path, payload) => {
  const data = client.post(path, payload).then((response) => response.data);
  return data;
};

const patchData = (path, payload) => {
  const data = client.patch(path, payload).then((response) => response.data);
  return data;
};

const deleteData = (path) => {
  const data = client.delete(path).then((response) => response.data);
  return data;
};
const services = {
  getData,
  postData,
  patchData,
  deleteData,
};

export default services;
