import '../shared/theme/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@material-tailwind/react';

import App from './App.tsx';
import { appRouter } from './appRouter';

const root = document.getElementById('root') as HTMLElement;

// async логика инициализации сторов
const initApp = () => {
  return true;
};

initApp();

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
