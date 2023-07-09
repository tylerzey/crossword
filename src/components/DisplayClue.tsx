"use client";

import { FC, useState } from "react";
import { answerFromClue } from "@/lib/answerFromClue";
import { clueZ, board } from "@/lib/toSchema";
import { z } from "zod";

export const DisplayClue: FC<{
  clue: z.infer<typeof clueZ>;
  board: z.infer<typeof board>;
}> = ({ clue, board }) => {
  const clueTxt = clue.text[0];
  const [showing, setShowing] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      <div className="font-medium">
        {"formatted" in clueTxt ? clueTxt.formatted : clueTxt.plain}
      </div>
      <div>
        {showing
          ? answerFromClue(clue, board.cells)
          : `${clue.cells.length} letter word`}
      </div>
      <button
        className="bg-slate-200 hover:bg-slate-400 py-1 px-4 rounded-sm"
        type="button"
        onClick={() => setShowing(true)}
      >
        Reveal
      </button>
    </div>
  );
};
