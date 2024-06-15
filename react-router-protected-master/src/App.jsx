import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages";

function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "John",
      permissions: ["analyze"],
      roles: ["admin"],
    });

  const logout = () => setUser(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/landing" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
