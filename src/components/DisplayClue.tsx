"use client";

import { FC } from "react";
import { answerFromClue } from "@/lib/answerFromClue";
import { clueZ, board } from "@/lib/toSchema";
import { z } from "zod";

export const DisplayClue: FC<{
  clue: z.infer<typeof clueZ>;
  board: z.infer<typeof board>;
  showingArr: number[];
  onSetNumberShowing: (n: number) => void;
}> = ({ clue, board, onSetNumberShowing, showingArr }) => {
  const clueTxt = clue.text[0];
  const showing = clue.cells.every((n) => showingArr.includes(n));

  return (
    <div className="flex flex-col gap-1">
      <div className="font-medium text-base">
        {"formatted" in clueTxt ? clueTxt.formatted : clueTxt.plain}
      </div>
      <div className="flex gap-2 text-xs">
        <div>
          {showing
            ? answerFromClue(clue, board.cells)
            : `${clue.cells.length} letter word`}
        </div>
        <div>{clue.direction}</div>
        {showing ? null : (
          <button
            className="bg-slate-200 hover:bg-slate-400 py-[1px] px-4 rounded-sm"
            type="button"
            onClick={() => clue.cells.forEach((n) => onSetNumberShowing(n))}
          >
            Reveal
          </button>
        )}
      </div>
    </div>
  );
};
