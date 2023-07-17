import { loadAllClues } from "@/lib/loadAllClues";
import { loadClue } from "@/lib/loadClue";
import { loadPuzzle, loadPuzzleFileName } from "@/lib/loadPuzzle";
import Link from "next/link";


export async function generateStaticParams() {
  const clues = loadAllClues();
 
  return clues.map((clue) => ({
    clue
  }))
}

export const dynamic = 'force-static'

const Page = async ({ params: { clue } }: { params: { clue: string } }) => {
  const json = loadClue(clue);
  const board = loadPuzzleFileName(json.boardLocation);

  return (
    <main>
      <h1 className="font-medium text-xl pb-7">
        Clue from crossword published on {board.publicationDate}
      </h1>

      <div className="font-medium text-lg pb-4">{json.text}</div>

      <div>{json.answer}</div>
      <div>
        {json.label} {json.direction}
      </div>

      <div>
        <Link href={`/{${json.boardLocation.split(".json")[0]}}`}>
          See all answers from that day
        </Link>
      </div>
    </main>
  );
};

Page.displayName = "CluePage";
export default Page;
