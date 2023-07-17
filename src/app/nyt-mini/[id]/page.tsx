import { PuzzleLandingPage } from "@/components/PuzzleLandingPage";
import { storeCluesFromPuzzle } from "@/lib/storeCluesFromPuzzle";
import { loadPuzzle } from "@/lib/loadPuzzle";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  storeCluesFromPuzzle("nyt-mini/" + id + ".json");
  const json = loadPuzzle("nyt-mini", id);
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
