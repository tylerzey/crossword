"use client";

import { FC, useCallback, useState } from "react";
import { board } from "@/lib/toSchema";
import { z } from "zod";
import { DisplayClue } from "./DisplayClue";
import { Board } from "./Board";

export const PuzzleLandingPage: FC<{ board: z.infer<typeof board> }> = ({
  board,
}) => {
  const [showingArr, setShowingArr] = useState([] as number[]);
  const onSetNumberShowing = useCallback((n: number) => {
    setShowingArr((cur) => [...cur, n]);
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col gap-4 w-1/2">
        {board.clues.map((clue, idx) => {
          return (
            <DisplayClue
              showingArr={showingArr}
              onSetNumberShowing={onSetNumberShowing}
              clue={clue}
              board={board}
              key={idx}
            />
          );
        })}
      </div>

      <div className="w-1/2 flex justify-center">
        <Board
          showingArr={showingArr}
          onSetNumberShowing={onSetNumberShowing}
          board={board}
        />
      </div>
    </div>
  );
};
