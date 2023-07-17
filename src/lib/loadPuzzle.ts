import path from "path";
import { puzzleSchema } from "./toSchema";
import { readFileSync } from "fs";

export const loadPuzzleFileName = (fileName: string) => {
  const filePath = path.resolve(".", "src/content/" + fileName);
  return puzzleSchema.parse(JSON.parse(readFileSync(filePath, "utf8")));
};

export const loadPuzzle = (dir: string, id: string) => {
  return loadPuzzleFileName(dir + "/" + id + ".json");
};
