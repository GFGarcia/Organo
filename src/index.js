// @ts-nocheck
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Cria o componente principal e renderiza nele
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode apoia em apresentação de erros de React em tempo de compilação
  // StrictMode renderiza novamente o código para verificar se existem alguns erros. Essa renderização ocorre somente em tempo de desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>
);