import React from 'react';
import ReactDOM from 'react-dom/client'; // Assurez-vous d'importer depuis 'react-dom/client' en React 18
import App from './App'; // Assurez-vous que le fichier App.js existe et est correctement exporté
import './index.css'; // Importez vos styles si nécessaire

// Utilisez createRoot pour React 18
const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' doit être l'id de l'élément dans votre HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);