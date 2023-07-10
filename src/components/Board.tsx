import { FC } from "react";
import { board } from "@/lib/toSchema";
import { z } from "zod";
import clsx from "clsx";

export const Board: FC<{ board: z.infer<typeof board> }> = ({ board }) => {
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
                  const cell = board.cells[row * width + col];
                  const answer = cell.answer;
                  const hasAnswer = !!answer;

                  return (
                    <div
                      key={col}
                      className={clsx(
                        "w-8 h-8 flex justify-center items-center text-xs border border-black border-1",
                        hasAnswer ? "bg-white" : "bg-black",
                      )}
                    >
                      <div className="">{answer}</div>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

Board.displayName = "Board";
