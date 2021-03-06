import { createServer } from "http";
import { Server, Socket } from "socket.io";
import app from "./app";
import session from "./lib/session";
import passport from "./lib/passport";
import sockets from "./sockets/sockets";
import Log from "./util/log";

const server = createServer(app);
const io = new Server(server);
const wrap = (middleware: any) => {
  return (socket: Socket, next: any) => middleware(socket.request, {}, next);
};

io.use(wrap(session));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));
io.use((socket: any, next) => {
  if (socket.request.user) {
    next();
  } else {
    next(new Error("unauthorized"));
  }
});

io.on("connect", sockets);

server.listen(app.get("port"), () => {
  Log.dev(`Listening at http://localhost:${app.get("port")}`);
  Log.dev(
    `app env=${app.get("env")} :: IS_DEV=${
      process.env.IS_DEV ? "true" : "false"
    }`
  );
});

export default server;
