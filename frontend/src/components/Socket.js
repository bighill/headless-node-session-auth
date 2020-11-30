import { useState } from "react";
import { io } from "socket.io-client";

const Socket = ({
  isSocketConnected,
  setIsSocketConnected,
  setSocketResponse,
}) => {
  const [socket, setSocket] = useState();

  const handleSocketConnect = (ev) => {
    const sock = io();

    sock.on("connect", () => {
      setIsSocketConnected(true);
      console.log("Socket Connected");
    });

    sock.on("message", (s) => {
      setSocketResponse(s);
      console.log("Socket 'message' received:", s);
    });

    setSocket(sock);
  };

  const handleSocketClose = (ev) => {
    socket.close();
    setIsSocketConnected(false);
    setSocketResponse("");
    console.log("Socket Closed");
  };

  const RenderSocketBtn = () => {
    return isSocketConnected ? (
      <div onClick={handleSocketClose} className="btn">
        Disconnect from socket
      </div>
    ) : (
      <div onClick={handleSocketConnect} className="btn">
        Connect to socket
      </div>
    );
  };

  return (
    <div className="block">
      <h2>Test Socket Connection</h2>
      <p>
        <em>desc</em>
      </p>

      <RenderSocketBtn />
    </div>
  );
};

export default Socket;
