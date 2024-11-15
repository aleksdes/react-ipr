import { z } from './index.ts';

const password = z.string().refine(
  (value: string) => {
    const regExp = /^([\w@\-.])*$/;

    if (Array.isArray(value))
      return value.every((val) => regExp.test(String(val)));

    return regExp.test(String(value));
  },
  {
    params: { i18n: 'password' },
  }
);

export { password };
