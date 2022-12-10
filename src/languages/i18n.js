import i18next from 'i18next';
import euskara from './euskara.json';
import castellano from './castellano.json';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng:'es',
  resources: {
    es: castellano,
    eus: euskara
  },
  react: {
    useSuspense: false,
  }
});

export default i18next;