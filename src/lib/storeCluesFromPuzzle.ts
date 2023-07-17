import path from "path";
import { answerFromClue } from "./answerFromClue";
import { puzzleSchema } from "./toSchema";
import { readFileSync, writeFileSync } from "fs";
import { assertIsString } from "./assertIsString";
import { toSlug } from "./toSlug";

export const storeCluesFromPuzzle = (boardLocation: string) => {
  const filePath = path.resolve(".", "src/content/" + boardLocation);
  const puzzle = puzzleSchema.parse(JSON.parse(readFileSync(filePath, "utf8")));
  const pz = puzzle.body[0]!;

  pz.clues.forEach((clue) => {
    const clueTxt = clue.text[0].plain;
    assertIsString(clueTxt);
    const store = {
      text: clueTxt,
      answer: answerFromClue(clue, pz.cells),
      direction: clue.direction,
      label: clue.label,
      authors: puzzle.constructors,
      copyright: puzzle.copyright,
      publicationDate: puzzle.publicationDate,
      boardLocation,
    };

    writeFileSync(
      path.resolve(".", "src/content/clues/" + toSlug(clueTxt) + ".json"),
      JSON.stringify(store),
    );
  });
};
