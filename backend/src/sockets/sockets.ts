import { Socket } from "socket.io";

export default (socket: any) => {
  const clientId: string = socket.id;
  console.log("Socket connected:", clientId);

  socket.emit("message", "Server says hi");

  socket.on("disconnect", (socket: Socket) => {
    console.log("Socket disconnected:", clientId);
  });
};
