import React from 'react';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// use create root instead
import { createRoot } from 'react-dom/client';
import { FilesContextProvider } from './FilesContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <MantineProvider>
      <FilesContextProvider>
      <App />
      </FilesContextProvider>

    </MantineProvider>
  );
}
