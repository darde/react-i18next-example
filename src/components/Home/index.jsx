import React from 'react';
import photo from './photo.jpg';

const Home = () => (
  <div className='preview'>
    <h1>Lighthouses</h1>
    <div className="cover">
      <figure className='center'>
        <img src={photo} alt="Lighthouse picture"/>
      </figure>
    </div>
    <p className='center'>Know the most beautiful lighthouses of the world.</p>
  </div>
);

export default Home;