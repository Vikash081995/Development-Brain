import { createServer } from "http";
import { handler } from "./POC/Node/Node-with-ts/handler";

const port = 5000;
const server = createServer(handler);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
