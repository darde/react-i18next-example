import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';

const Lindau = ({ t }) => (
  <div className='preview'>
    <h2>{t('lighthouses.lindau.title')}</h2>
    <figure>
      <img src={photo} alt={t('lighthouses.lindau.figure.alt')} />
      <figcaption>{t('lighthouses.lindau.figure.credits')}</figcaption>
    </figure>
    <p>{t('lighthouses.lindau.content')}</p>
  </div>
);

export default translate('common')(Lindau);
