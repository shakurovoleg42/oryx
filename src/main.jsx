import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Создаем корень приложения
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение в корень
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
