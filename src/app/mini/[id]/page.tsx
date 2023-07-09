import type { FC } from "react";
import fs from "fs";
import { toSchema } from "@/lib/toSchema";

import { DisplayClue } from "@/components/DisplayClue";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const json = toSchema.parse(
    JSON.parse(fs.readFileSync("src/content/mini/" + id + ".json", "utf8")),
  );
  const board = json.body[0]!;

  return (
    <div>
      <h1 className="font-medium text-xl pb-7">Mini Crossword for {id}</h1>

      <div className="">
        <div className="font-medium text-lg pb-4">
          Clues from this days puzzle
        </div>
        <div className="flex flex-col gap-4">
          {board.clues.map((clue, idx) => {
            const clueTxt = clue.text[0];

            return <DisplayClue clue={clue} board={board} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

Page.displayName = "MiniPage";
export default Page;
