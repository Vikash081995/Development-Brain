import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
export const newHandler = (req: IncomingMessage, res: ServerResponse) => {
  readFile("data.json")
    .then((data: Buffer) => res.end(data, () => console.log("File sent")))
    .catch((err: Error) => {
      console.log(`Error: ${err.message}`);
      res.statusCode = 500;
      res.end();
    });
};
