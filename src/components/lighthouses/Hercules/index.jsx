import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';

const Hercules = ({ t }) => (
  <div className='preview'>
    <h2>{t('lighthouses.hercules.title')}</h2>
    <figure>
      <img src={photo} alt={t('lighthouses.hercules.figure.alt')} />
      <figcaption>{t('lighthouses.hercules.figure.credits')}</figcaption>
    </figure>
    <p>{t('lighthouses.hercules.content')}</p>
  </div>
);

export default translate('common')(Hercules);
