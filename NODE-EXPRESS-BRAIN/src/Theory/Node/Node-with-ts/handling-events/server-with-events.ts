import { createServer } from "http";
import { handler } from "../handler";

const port = 5000;
const server = createServer();
server.on("request", handler);
server.listen(port);
server.on("listening", () => {
  console.log(`Event server listening on port ${port}`);
});
