import { useEffect, useState } from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Endpoint from "./components/Endpoint";
import Socket from "./components/Socket";

const defaultUser = { _id: "", email: "" };

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [user, setUser] = useState({ ...defaultUser });
  const [socketResponse, setSocketResponse] = useState("");

  const handshake = () => {
    fetch("/api/user")
      .then((res) => {
        setIsLoggedIn(res.status === 200);
        return res.json();
      })
      .then((res) => {
        console.log("Handshake", res);
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
      <Status
        isLoggedIn={isLoggedIn}
        isSocketConnected={isSocketConnected}
        user={user}
        socketResponse={socketResponse}
      />
      <Register />
      <Login handshake={handshake} />
      <Logout handshake={handshake} />
      <Endpoint />
      <Socket
        isSocketConnected={isSocketConnected}
        setIsSocketConnected={setIsSocketConnected}
        setSocketResponse={setSocketResponse}
      />
    </div>
  );
}

export default App;
