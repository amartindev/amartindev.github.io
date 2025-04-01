import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma predeterminado si no se detecta.
    supportedLngs: ['en', 'es', 'fr'], // Idiomas soportados.
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta de los archivos de traducción.
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
