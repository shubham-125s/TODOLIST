import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global CSS (if any)
import App from './App';  // Import the main App component

// Create a root React element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the div with the id "root" in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
