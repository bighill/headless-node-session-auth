import { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailUpdate = (ev) => setEmail(ev.target.value);
  const handlePasswordUpdate = (ev) => setPassword(ev.target.value);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch(`/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then(console.log)
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch(console.error);
  };

  return (
    <div className="block">
      <h2>Register New User</h2>
      <p>
        <em>
          User will be registered immediately,
          <br />
          but not logged in until Login is submitted.
        </em>
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
            Register
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
