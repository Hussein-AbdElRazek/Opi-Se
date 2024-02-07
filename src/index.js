import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';
import store from './store';
import { GlobalCssPriority } from './components/ui';
import { ImagesContextProvider } from './imagesStore/images-context';
import { VideoContextProvider } from './videoCallStore/video-call-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ImagesContextProvider>
      <BrowserRouter>
        <SnackbarProvider autoHideDuration={3000} maxSnack={5}>
          <GlobalCssPriority>
            <VideoContextProvider>
              <App />
            </VideoContextProvider>

          </GlobalCssPriority>
        </SnackbarProvider>
      </BrowserRouter>
    </ImagesContextProvider>
  </Provider>
  // </React.StrictMode>
);

