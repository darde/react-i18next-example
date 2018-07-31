import React from 'react';
import photo from './photo.jpg';

const Peggys = () => (
  <div className='preview'>
    <h2>Peggys Point Lighthouse, Canada</h2>
    <figure>
      <img src={photo} alt="Peggys Point Lighthouse lighthouse photo"/>
      <figcaption>Photo: Dennis Jarvis</figcaption>
    </figure>
    <p>
      Perhaps the most famous lighthouse in Canada, the current Peggys Point Lighthouse was first lit in 1915. It marks the eastern entrance of St. Margarets Bay and is one of the most popular tourist attractions in Nova Scotia.
    </p>
  </div>
);

export default Peggys;
