import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';
import Common from '../Common';

const Augustine = ({ t }) => (
  <Common t={t} photo={photo} name='augustine' />
);

export default translate('common')(Augustine);
