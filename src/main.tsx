import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';


ReactDOM.render(
  <React.StrictMode>
    <MantineProvider>
    <App /> 
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
