import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RoutePaths } from '../interfaces/route';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

export const AppRouter: React.FC = () => {
  const {user} = React.useContext(Context);
  return (
    <Switch>
      {!user?.isAuth && authRoutes.map(route => {
        return <Route key={route.path} path={route.path} component={route.component} exact/>
      })}
      {publicRoutes.map(route => {
        return <Route key={route.path} path={route.path} component={route.component}/>
      })}
      <Redirect to={RoutePaths.SHOP}/>
    </Switch>
  )
}