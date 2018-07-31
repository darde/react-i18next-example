import React from 'react';
import photo from './photo.jpg';

const Lindau = () => (
  <div className='preview'>
    <h2>Lindau Lighthouse, Germany</h2>
    <figure>
      <img src={photo} alt="Lindau lighthouse photo"/>
      <figcaption>Photo: Andreas Flohr</figcaption>
    </figure>
    <p>
    The southernmost lighthouse in Germany, the Lindau Lighthouse is locaed on Lake Constance, Lindau. It was completed in 1856, when it took over the port’s previous light station in the Mangtrum Tower, constructed in 1230. The 108 foot tall structure is quite unique among lighthouses because it also houses a massive clock that can be viewed from the city.
    </p>
  </div>
);

export default Lindau;
