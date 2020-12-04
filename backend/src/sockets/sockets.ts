import { Socket } from "socket.io";

export default (socket: any) => {
  const clientId: string = socket.id;
  process.env.IS_DEV && console.log("Socket connected:", clientId);

  socket.emit("message", "Server says hi");

  socket.on("disconnect", (socket: Socket) => {
    process.env.IS_DEV && console.log("Socket disconnected:", clientId);
  });
};
