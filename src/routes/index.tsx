import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Configuracoes from '../pages/Configuracoes';

const Routes: React.FC = () => (
   <Switch>
      <Route path="/" component={Dashboard} />
   </Switch>
);

export default Routes;
