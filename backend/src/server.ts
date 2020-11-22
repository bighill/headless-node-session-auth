import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";
import sockets from "./sockets/sockets";

const server = createServer(app);
const io = new Server(server);
io.on("connect", sockets);

server.listen(app.get("port"), () => {
  console.log(`Listening at http://localhost:${app.get("port")}`);
  console.log(`NODE_ENV is ${app.get("env")}`);
});

export default server;
