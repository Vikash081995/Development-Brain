import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
export const asyncHandler = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const data: Buffer = await readFile("data.json");
  res.end(data, () => console.log("File sent"));
};
