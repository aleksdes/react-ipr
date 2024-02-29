import { createBreakpoint } from 'react-use';

import config from 'tailwind-config';
import resolveConfig from 'tailwindcss/resolveConfig';

export function useBreakpoint(breakpoint = {}) {
  const screens: { [key: string]: string } =
    resolveConfig(config).theme?.screens;
  const screensBreakpoint = Object.keys(screens).reduce(
    (acc: { [key: string]: number }, curr: string) => {
      if (typeof screens[curr] === 'object') return acc;
      acc[curr] = parseInt(screens[curr]);
      return acc;
    },
    {}
  );
  const useBreakpoint = createBreakpoint({
    ...screensBreakpoint,
    ...breakpoint,
  });
  return useBreakpoint();
}
