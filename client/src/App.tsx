import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/NabBar';

export const App: React.FC = () =>  {
  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
}