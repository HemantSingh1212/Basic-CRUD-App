import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// contexts
import { PersonProvider } from './contexts/PersonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonProvider>
      <App />
    </PersonProvider>
  </React.StrictMode>
);
