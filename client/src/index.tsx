import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App';
import { UserStore } from './store/UserStore';
import { DeviceStore } from './store/DeviceStore';

interface ContextProps {
  user: UserStore,
  devices: DeviceStore
}

export const Context = React.createContext<Partial<ContextProps>>({});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore,
      devices: new DeviceStore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);