import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';

const Peggys = ({ t }) => (
  <div className='preview'>
    <h2>{t('lighthouses.peggys.title')}</h2>
    <figure>
      <img src={photo} alt={t('lighthouses.peggys.figure.alt')} />
      <figcaption>{t('lighthouses.peggys.figure.credits')}</figcaption>
    </figure>
    <p>{t('lighthouses.peggys.content')}</p>
  </div>
);

export default translate('common')(Peggys);
