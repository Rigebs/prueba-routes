// Importa React y cualquier otra dependencia necesaria
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';

// Define el componente principal de tu aplicación
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/landing" component={LandingPage} />
      </Switch>
    </Router>
  );
}

// Exporta el componente principal para poder usarlo en otros archivos
export default App;
