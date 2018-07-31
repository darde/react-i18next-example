import React from 'react';
import AppProvider from './components/context/AppProvider';
import Router from './components/Router';
import Toolbar from './components/Toolbar';
import './styles/styles.css';

const App = () => (
  <div className='wrapper'>
    <AppProvider>
      <Toolbar />
      <Router />
    </AppProvider>
  </div>
);

export default App;
