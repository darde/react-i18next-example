import React from 'react';
import AppProvider from './components/context/AppProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Router from './components/Router';
import Toolbar from './components/Toolbar';
import './styles/styles.css';

const App = () => (
  <div className='wrapper'>
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <Toolbar />
        <Router />
      </AppProvider>
    </I18nextProvider>
  </div>
);

export default App;
