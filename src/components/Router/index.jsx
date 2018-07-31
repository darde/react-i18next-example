import React from 'react';
import AppConsumer from '../context/AppConsumer';
import Home from '../Home';
import Augustine from '../lighthouses/Augustine';
import Hercules from '../lighthouses/Hercules';
import Lindau from '../lighthouses/Lindau';
import Peggys from '../lighthouses/Peggys';

const elements = { Home, Augustine, Hercules, Lindau, Peggys };

const Router = ({ route }) => (
  React.createElement(elements[route])
);

export default AppConsumer(Router);