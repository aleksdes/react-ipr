import '../shared/ui/theme/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';

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

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
