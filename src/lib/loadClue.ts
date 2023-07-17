import path from "path";
import { clueSchema } from "./toSchema";
import { readFileSync } from "fs";

export const loadClue = (clue: string) => {
  const filePath = path.resolve(".", "src/content/clues/" + clue + ".json");
  return clueSchema.parse(JSON.parse(readFileSync(filePath, "utf8")));
};
