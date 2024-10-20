import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css'

// import Inicio from './pages/Home.jsx';
// import QuienesSomos from './pages/About.jsx';
// import Servicios from './pages/Services.jsx';
// import Testimonios from './pages/Testimonial.jsx';
// import Contactanos from './pages/Contact.jsx';

import Inicio from './paginas/InicioPagina.jsx';
import QuienesSomos from './paginas/QuienesSomos.jsx';
import Servicios from './paginas/Servicios.jsx';
import Testimonios from './paginas/Testimonios.jsx';
import Contactanos from './paginas/Contactanos.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="testimonios" element={<Testimonios />} />
          <Route path="contactanos" element={<Contactanos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

