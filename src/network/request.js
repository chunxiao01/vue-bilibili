import axios from "axios";
export function request(config) {
  const intetface = axios.create({
    baseURL: "http://127.0.0.1",
    timeout: 5000
  });
  intetface.interceptors.request.use(
    config => {
      return config;
    },
    err => {}
  );
  intetface.interceptors.request.use(
    res => {
      return res.data;
    },
    err => {}
  );
  return intetface(config);
}
