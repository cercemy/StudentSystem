import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', function() {
  const initialData = {
    "123456789": {
      "nic": "123456789",
      "name": "Ahmet",
      "address": "ABC Cadde",
      "contact": "+905551234567"
    },
    "987654321": {
      "nic": "987654321",
      "name": "Ayse Kaya",
      "address": "5678 Sokak Ankara",
      "contact": "+905555555555"
    }
  };

  if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify(initialData));
  }
});
