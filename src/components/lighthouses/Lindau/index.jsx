import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';
import Common from '../Common';

const Lindau = ({ t }) => (
  <Common t={t} photo={photo} name='lindau' />
);

export default translate('common')(Lindau);
