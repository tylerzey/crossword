import path from "path";
import { readdirSync } from "fs";

export const loadAllClues = () => {
    const filePath = path.resolve(".", "src/content/clues");
    const res = readdirSync(filePath);

    return res.map(file => file.split('.json')[0]!)
}