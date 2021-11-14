import { createServer } from "http";
import { createServerSocket, initializeServer } from "./initializeServer.js";
import { socketHandlers } from "./handlers/socket.js";
import { router } from "./router/index.js";

const app = initializeServer(router);
const httpServer = createServer(app);
export const io = createServerSocket(httpServer);
const PORT = 3000;

io.on("connection", (socket) => {
  socket.on("message", socketHandlers.message);
  socket.on("disconnect", socketHandlers.disconnect);
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}`));
