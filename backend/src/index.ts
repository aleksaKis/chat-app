import { createServer } from "http";
import { createServerSocket, initializeServer } from "./initializeServer";
import { socketHandlers } from "./handlers/socket";
import { router } from "./router";

const app = initializeServer(router);
const httpServer = createServer(app);
export const io = createServerSocket(httpServer);
const PORT = 3000;

io.on("connection", (socket) => {
  socket.on("message", socketHandlers.message);
  socket.on("disconnect", socketHandlers.disconnect);
});

httpServer.listen(PORT, () => {return true})
