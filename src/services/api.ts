/* eslint-disable no-param-reassign */
import axios from 'axios';
import { useAuth } from '../hooks/auth';

const api = axios.create({
   baseURL: 'https://api-roulette-app.herokuapp.com/',
});

api.interceptors.request.use(
   async (config: any) => {
      const token = localStorage.getItem('@RouletteApp:token');

      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
   },
   (error: any) => {
      return Promise.reject(error);
   },
);

api.interceptors.response.use(
   (response: any) => response,
   async (err: any) => {
      if (err.response?.status >= 400) {
         const { signOut } = useAuth();

         await signOut();
      }

      return Promise.reject(err);
   },
);

export default api;
