// frontend/mfe-ethic/src/bootstrap.js dosyasının doğru içeriği

// En üstte "import React from 'react';" satırı OLMAMALI

import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);