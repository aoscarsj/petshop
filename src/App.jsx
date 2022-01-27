import React from 'react';
import './assets/css/base/base.css';
import Sobre from './paginas/Sobre';
import Home from './paginas/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagina404 from './paginas/Pagina404';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />

        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </Router>
  );
}

export default App;
