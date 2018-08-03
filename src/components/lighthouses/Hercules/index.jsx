import React from 'react';
import { translate } from 'react-i18next';
import photo from './photo.jpg';
import Common from '../Common';

const Hercules = ({ t }) => (
  <Common t={t} photo={photo} name='hercules' />
);

export default translate('common')(Hercules);
