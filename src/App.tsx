import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import './styles/bootstrap.min.css';

const App: React.FC = () => (
   <BrowserRouter>
      <GlobalStyle />
      <Routes />
   </BrowserRouter>
);

export default App;
