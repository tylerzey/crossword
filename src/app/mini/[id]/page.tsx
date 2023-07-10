import type { FC } from "react";
import fs from "fs";
import { toSchema } from "@/lib/toSchema";
import path from "path";

import { PuzzleLandingPage } from "@/components/PuzzleLandingPage";

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

      <PuzzleLandingPage board={board} />
    </main>
  );
};

Page.displayName = "MiniPage";
export default Page;
