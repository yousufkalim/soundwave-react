/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FC, useEffect } from 'react';
import Router from 'react-easy-router';
import { toast, ToastContainer } from 'react-toastify';
import request from './api/request';
import { AxiosResponse } from 'axios';

// Routes
import routes from './routes';

// CSS Integration
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

const App: FC = () => {
  useEffect(() => {
    (() => {
      request('get', '/auth/get-token')
        .then((res: AxiosResponse) => {
          if (res.data.accessToken) {
            localStorage.setItem('token', `Bearer ${res.data.accessToken}`);
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    })();
  }, []);

  const checkAuth = (): boolean => {
    return localStorage.getItem('token') !== null;
  };

  return (
    <div className="App h-full w-full font-[Montserrat]">
      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
      <Router routes={routes} isAuthenticated={checkAuth} />
    </div>
  );
};

export default App;
