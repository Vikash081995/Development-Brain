import { IncomingMessage, ServerResponse } from "http";
//import { readFile } from "fs";
import { readFile } from "fs/promises";
export const handler = (req: IncomingMessage, res: ServerResponse) => {
  const p: Promise<Buffer> = readFile("data.json");
  p.then((data: Buffer) => res.end(data, () => console.log("File sent")));
  p.catch((err: Error) => {
    console.log(`Error: ${err.message}`);
    res.statusCode = 500;
    res.end();
  });
};
