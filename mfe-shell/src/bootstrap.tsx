// frontend/mfe-shell/src/bootstrap.js dosyasının OLMASI GEREKEN son hali

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Yönlendirme mantığını içeren App.js'i import ediyoruz.

const container = document.getElementById('root');
const root = createRoot(container);

// Tek görevi App bileşenini ekrana basmak.
root.render(<App />);