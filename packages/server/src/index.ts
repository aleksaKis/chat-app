import { createServer } from "http";
import { createServerSocket, initializeServer } from "./initializeServer";
import { socketHandlers } from "./handlers/socket";
import { router } from "./router";
import { Socket } from "socket.io";

const app = initializeServer(router);
const httpServer = createServer(app);
export const io = createServerSocket(httpServer);

io.on("connection", (socket: Socket): void => {
  socket.on("message", socketHandlers.message);
  socket.on("disconnect", socketHandlers.disconnect);
});

httpServer.listen(process.env.CB_PORT, () => {
  return true;
});
