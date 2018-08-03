import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';

const Augustine = ({ t }) => (
  <div className='preview'>
    <h2>{t('lighthouses.augustine.title')}</h2>
    <figure>
      <img src={photo} alt={t('lighthouses.augustine.figure.alt')} />
      <figcaption>{t('lighthouses.augustine.figure.credits')}</figcaption>
    </figure>
    <p>{t('lighthouses.augustine.content')}</p>
  </div>
);

export default translate('common')(Augustine);
