import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/en/zod.json';

import { en } from './custom-messages/en.ts';

/**
 * Настройка локализации сообщений об ошибках
 */
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: {
        zod: translation,
        custom: en,
      },
    },
  })
  .catch((e) => console.error(e));
z.setErrorMap(makeZodI18nMap({ ns: ['zod', 'custom'] }));

export { z };
export * as zodRules from './custom-rules.ts';
export default i18n;
