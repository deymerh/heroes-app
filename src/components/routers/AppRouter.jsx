import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes path="/login" component={LoginScreen} isAuthenticated={user.logged} />
          <PrivateRoutes path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
  )
};
