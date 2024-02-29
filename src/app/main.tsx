import '../shared/ui/theme/index.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@material-tailwind/react';

import { appRouter } from './appRouter';
import { appStore } from './appStore.ts';

const root = document.getElementById('root') as HTMLElement;

// async логика инициализации сторов
const initApp = () => {
  return true;
};

initApp();

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider store={appStore}>
      <ThemeProvider>
        <RouterProvider router={appRouter()} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
