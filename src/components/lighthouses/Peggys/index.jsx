import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';
import Common from '../Common';

const Peggys = ({ t }) => (
  <Common t={t} photo={photo} name='peggys' />
);

export default translate('common')(Peggys);
