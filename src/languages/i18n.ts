import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageResources } from './constants';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: languageResources,
});

export default i18n;
