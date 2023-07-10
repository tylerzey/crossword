import { FC } from "react";
import { board } from "@/lib/toSchema";
import { z } from "zod";
import clsx from "clsx";

export const Board: FC<{
  board: z.infer<typeof board>;
  onSetNumberShowing: (n: number) => void;
  showingArr: number[];
}> = ({ showingArr, board, onSetNumberShowing }) => {
  const { height, width } = board.dimensions;

  return (
    <div className="border border-1 inline-block h-fit">
      {Array(width)
        .fill(0)
        .map((_, row) => {
          return (
            <div className="flex" key={row}>
              {Array(height)
                .fill(0)
                .map((_, col) => {
                  const n = row * width + col;
                  const cell = board.cells[n];
                  const answer = cell.answer;
                  const hasAnswer = !!answer;

                  return (
                    <button
                      key={col}
                      type="button"
                      onClick={() => onSetNumberShowing(n)}
                      className={clsx(
                        "w-8 h-8 flex justify-center items-center text-xs border border-black border-1 relative",
                        hasAnswer ? "bg-white" : "bg-black",
                      )}
                    >
                      {cell.label ? (
                        <span
                          style={{ lineHeight: "8px" }}
                          className="text-[7px] absolute top-0 left-0"
                        >
                          {cell.label}
                        </span>
                      ) : null}
                      {!hasAnswer
                        ? null
                        : showingArr.includes(n)
                        ? answer
                        : "😶‍🌫️"}
                    </button>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

Board.displayName = "Board";
