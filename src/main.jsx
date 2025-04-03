import React from 'react';
import ReactDOM from 'react-dom/client';

// Import global providers
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { ToastProvider } from './contexts/ToastContext.jsx';

// Import the main application component
import App from './App.jsx';

// Import global styles
import './index.css';

// Render the React app into the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ThemeProvider manages light/dark mode preferences */}
    <ThemeProvider>
      {/* ToastProvider enables notifications throughout the app */}
      <ToastProvider>
        {/* Main Application Component */}
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
