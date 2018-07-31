import React from 'react';
import AppConsumer from '../context/AppConsumer';
import { lighthouses } from '../../payload';

const Toolbar = ({ route, go }) => (
  <div className='toolbar'>
    <div className='menu'>
      {
        lighthouses.map((item, idx) => (
          <button
            key={idx}
            onClick={() => { go(item.label); }}
            className={route === item.label ? 'active' : ''}
          >
            {item.label}
          </button>
        ))
      }
    </div>
  </div>
);

export default AppConsumer(Toolbar);
