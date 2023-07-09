import { clueZ, cellZ } from "./toSchema";
import { z } from "zod";

export const answerFromClue = (
  clue: z.infer<typeof clueZ>,
  cells: z.infer<typeof cellZ>[],
): string => {
  const answer = clue.cells
    .map((idx) => {
      const cell = cells[idx];
      if ("answer" in cell) {
        return cell.answer;
      }

      return "";
    })
    .join("");

  return answer;
};
