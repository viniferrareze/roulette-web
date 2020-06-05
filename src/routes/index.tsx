import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Configuracoes from '../pages/Configuracoes';

const Routes: React.FC = () => (
   <Switch>
      {/* <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/sequence" component={Dashboard} isPrivate />
      <Route path="/configuracoes" component={Configuracoes} isPrivate /> */}
      <Route path="/" component={Dashboard} />
   </Switch>
);

export default Routes;
