import React from 'react';

const Common = ({ t, photo, name }) => (
  <div className='preview'>
    <h2>{t(`lighthouses.${name}.title`)}</h2>
    <figure>
      <img src={photo} alt={t(`lighthouses.${name}.figure.alt`)} />
      <figcaption>{t(`lighthouses.${name}.figure.credits`)}</figcaption>
    </figure>
    <p>{t(`lighthouses.${name}.content`)}</p>
  </div>
);

export default Common;