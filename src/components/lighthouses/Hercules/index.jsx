import React from 'react';
import photo from './photo.jpg';

const Hercules = () => (
  <div className='preview'>
    <h2>Tower of Hercules, Spain</h2>
    <figure>
      <img src={photo} alt="Tower of Hercules lighthouse photo"/>
      <figcaption>Photo: Alessio Damato</figcaption>
    </figure>
    <p>
    The oldest lighthouse in the world, the Tower of Hercules, also referred to as the Corunna Lighthouse or Farum Brigantium, was constructed sometime in the second century. It is located in northwest Spain outside the city of Corunna. The Roman-built tower is believed to have been based on the Lighthouse of Alexandria. While the 180 foot building is around 1900 years old, the structure is not entirely original—during a 1791 renovation, the three-story tower was given an additional level.
    </p>
  </div>
);

export default Hercules;
