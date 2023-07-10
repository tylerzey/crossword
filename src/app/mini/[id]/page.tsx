import type { FC } from "react";
import fs from "fs";
import { toSchema } from "@/lib/toSchema";
import path from "path";

import { DisplayClue } from "@/components/DisplayClue";
import { Board } from "@/components/Board";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const filePath = path.resolve(".", "src/content/mini/" + id + ".json");
  const json = toSchema.parse(JSON.parse(fs.readFileSync(filePath, "utf8")));
  const board = json.body[0]!;

  return (
    <main>
      <h1 className="font-medium text-xl pb-7">Mini Crossword for {id}</h1>

      <div className="font-medium text-lg pb-4">
        Clues from this days puzzle
      </div>
      <div className="flex">
        <div className="flex flex-col gap-4 w-1/2">
          {board.clues.map((clue, idx) => {
            return <DisplayClue clue={clue} board={board} key={idx} />;
          })}
        </div>

        <div className="w-1/2 flex justify-center">
          <Board board={board} />
        </div>
      </div>
    </main>
  );
};

Page.displayName = "MiniPage";
export default Page;
