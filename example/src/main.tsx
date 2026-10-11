import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find app element');

const root = createRoot(container);
root.render(<App />);
