import { useState } from "react";

const Login = ({ handshake }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailUpdate = (ev) => setEmail(ev.target.value);
  const handlePasswordUpdate = (ev) => setPassword(ev.target.value);

  const handleSubmit = (ev) => {
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
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch(console.error);
  };

  return (
    <div className="block">
      <h2>User Login</h2>
      <p>
        <em>Obviously need to register before logging in.</em>
      </p>
      <form onSubmit={handleSubmit}>
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
        <br />
        <div>
          <div onClick={handleSubmit} className="btn">
            Login
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
