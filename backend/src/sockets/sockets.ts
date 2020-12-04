import { Socket } from "socket.io";
import Log from "../util/log";

export default (socket: any) => {
  const clientId: string = socket.id;
  Log.dev(`Socket connected: ${clientId}`);

  socket.emit("message", "Server says hi");

  socket.on("disconnect", (socket: Socket) => {
    Log.dev(`Socket disconnected: ${clientId}`);
  });
};
