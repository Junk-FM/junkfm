import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </StrictMode>
);
