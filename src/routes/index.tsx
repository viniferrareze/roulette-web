import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Configuracoes from '../pages/Configuracoes';

const Routes: React.FC = () => (
   <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/" exact component={Dashboard} />
      <Route path="/configuracoes" exact component={Configuracoes} />
   </Switch>
);

export default Routes;
