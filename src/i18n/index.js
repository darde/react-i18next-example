import i18n from 'i18next';
import pt from './locales/default.json';
import en from './locales/default.en.json';
import homePt from '../components/Home/locales/default.json';
import homeEn from '../components/Home/locales/default.en.json';

pt['pt-BR'].home = homePt['pt-BR'];
en['en'].home = homeEn['en'];

const options = {
  interpolation: { escapeValue: false },
  lng: 'pt',

  debug: true,

  resources: {
    pt: {
      common: pt['pt-BR'],
    },
    en: {
      common: en.en,
    },
  },

  fallbackLng: 'pt',

  ns: ['common'],

  defaultNS: 'common',

  react: {
    wait: true,
  },
};

i18n.init(options);


export default i18n;