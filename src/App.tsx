import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './styles/bootstrap.min.css';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
   <BrowserRouter>
      <AppProvider>
         <Routes />
      </AppProvider>
      <GlobalStyle />
   </BrowserRouter>
);

export default App;
