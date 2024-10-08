import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";
import path from "path";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
  readFile(
    path.join(__dirname, "./data/dummy.txt"),
    (err: Error | null, data: Buffer) => {
      if (err == null) {
        res.end(data, () => console.log(data));
      } else {
        console.log(`Error:${err.message}`);
        res.statusCode = 500;
        res.end();
      }
    }
  );
};
