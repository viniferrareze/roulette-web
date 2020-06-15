import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Configuracoes from '../pages/Configuracoes';
import SequenceOnClick from '../pages/SequenceOnClick';

const Routes: React.FC = () => (
   <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/sequenceOnClick" component={SequenceOnClick} isPrivate />
      <Route path="/configuracoes" component={Configuracoes} isPrivate />
   </Switch>
);

export default Routes;
