import { useCaseStates } from "@/server/use-cases/states";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, query, method } = req;

  const response = await useCaseStates.list();

  return res.status(200).json({ data: response, message: "Ok" });
}
