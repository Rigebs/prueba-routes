// Importa React y cualquier otra dependencia necesaria
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" component={<Home/>} />
      </Routes>
    </Router>
  );
}

// Exporta el componente principal para poder usarlo en otros archivos
export default App;
