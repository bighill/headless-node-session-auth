import { useEffect, useState } from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Endpoint from "./components/Endpoint";

const defaultUser = { _id: "Null", email: "Null" };

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const [user, setUser] = useState({ ...defaultUser });

  const handshake = () => {
    fetch("/api/user")
      .then((res) => {
        setIsLoggedIn(res.status === 200 ? "Yes" : "No");
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setUser(res.data);
        } else {
          setUser({ ...defaultUser });
        }
      })
      .catch(console.error);
  };

  useEffect(handshake, []);

  return (
    <div className="App">
      <Header />
      <Status isLoggedIn={isLoggedIn} user={user} />
      <Register />
      <Login handshake={handshake} />
      <Logout handshake={handshake} />
      <Endpoint />
    </div>
  );
}

export default App;
