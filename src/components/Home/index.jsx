import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';

const Home = ({ t }) => (
  <div className='preview'>
    <h1>{t('home.title')}</h1>
    <div>
      <figure className='center'>
        <img src={photo} alt={t('home.figure.alt')} />
      </figure>
    </div>
    <p className='center'>{t('home.content')}</p>
  </div>
);

export default translate('common')(Home);