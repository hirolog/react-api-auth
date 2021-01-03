import axios from "axios";
// import {logOut} from '@/util/auth'

export default function apiClient() {
  const api = axios.create({
    baseURL: "http://localhost",
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // logOut()

        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  );

  return api;
}
