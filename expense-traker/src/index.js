import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import Appmain from './Appmain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <Appmain/>
    </GlobalProvider>
  </React.StrictMode>
);


