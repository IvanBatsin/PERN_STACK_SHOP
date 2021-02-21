import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/NabBar';
import { Context } from '.';
import { auth } from './api/auth';
import jwtDecode from 'jwt-decode';

export const App: React.FC = observer(() =>  {
  const {user} = React.useContext(Context);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    auth().then(data => {
      user?.setUser(jwtDecode(data.data));
      user?.setIsAuth(true);
    }).catch(err => {
      user?.setUser(undefined);
      user?.setIsAuth(false);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>
  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
})