import { NextApiRequest, NextApiResponse } from "next";

import db from "../../../src/data/db.json";
import { randomUUID } from "crypto";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const results = db;
    const users = results.results;
    const states = users.map((user) => user.location.state);
    const notDuplicatedStatesSet = new Set(states);
    const notDuplicatedStatesArray = Array.from(notDuplicatedStatesSet);
    const sortedStatesArray = notDuplicatedStatesArray.sort();
    const statesWithIds = sortedStatesArray.map((state) => ({
      id: getIndex(),
      label: capitalizeWords(state),
    }));

    return res.status(200).json({ data: statesWithIds });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}

const getIndex = () => {
  return randomUUID();
};

function capitalizeWords(sentence: string): string {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(" ");
}
