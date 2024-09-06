import './bootstrap';
import '../css/app.css'

import { createRoot } from 'react-dom/client';
import Home from './Pages/home';

createRoot(document.getElementById('app')).render(
   <Home/>
);