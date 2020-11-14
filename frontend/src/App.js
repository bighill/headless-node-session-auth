import { useEffect, useState } from "react";
import "./App.css";

const defaultUser = { _id: null, email: null };

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const [user, setUser] = useState({ ...defaultUser });

  const handshake = () =>
    fetch("/api/user")
      .then((res) => {
        setIsLoggedIn(res.status === 200 ? "Yes" : "No");
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setUser(res.data);
        } else {
          setUser({ ...defaultUser });
        }
      })
      .catch(console.error);

  useEffect(handshake, []);

  const handleEmailUpdate = (ev) => setEmail(ev.target.value);
  const handlePasswordUpdate = (ev) => setPassword(ev.target.value);

  const handleRegisterSubmit = (ev) => {
    ev.preventDefault();

    fetch(`/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch(console.error);
  };

  const handleLoginSubmit = (ev) => {
    ev.preventDefault();

    fetch(`/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        handshake();
      })
      .catch(console.error);
  };

  const handleLogout = (ev) => {
    fetch("/auth/logout")
      .then((res) => res.json())
      .then(handshake)
      .catch(console.error);
  };

  return (
    <div className="App">
      <h1>Node Headless Sample Client</h1>

      <div>
        <p>
          Logged in: <span>{isLoggedIn}</span>
        </p>
        <p>
          User _id: <span>{user._id}</span>
        </p>
        <p>
          User email: <span>{user.email}</span>
        </p>
      </div>

      <form onSubmit={handleRegisterSubmit}>
        <div>
          <input
            onChange={handleEmailUpdate}
            value={email}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            onChange={handlePasswordUpdate}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <input onClick={handleRegisterSubmit} defaultValue="Register" />
        </div>
      </form>

      <form onSubmit={handleLoginSubmit}>
        <div>
          <input
            onChange={handleEmailUpdate}
            value={email}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            onChange={handlePasswordUpdate}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <input onClick={handleLoginSubmit} defaultValue="Login" />
        </div>
      </form>

      <div onClick={handleLogout} className="btn">
        Logout
      </div>
    </div>
  );
}

export default App;
