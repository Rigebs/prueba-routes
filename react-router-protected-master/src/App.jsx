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
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {user && (
          <>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/admin" element={<Admin />} />
          </>
        )}
      </Routes>

      <div>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
