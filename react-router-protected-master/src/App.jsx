// Importa React y cualquier otra dependencia necesaria
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

// Exporta el componente principal para poder usarlo en otros archivos
export default App;
