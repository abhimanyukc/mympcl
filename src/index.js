import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import global_en from "./translation/en/global.json";
import global_nep from "./translation/nep/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const storedLanguage = localStorage.getItem('language') || 'en';
console.log("Stored Language:", storedLanguage);

i18next.init({
  interpolation: { escapeValue: true },
  lng: storedLanguage,
  fallbackLng: 'en', // Set your fallback language
  resources: {
    en: {
      global: global_en,
    },
    नेपा: {
      global: global_nep,
    }
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
