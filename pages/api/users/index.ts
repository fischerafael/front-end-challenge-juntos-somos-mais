import { NextApiRequest, NextApiResponse } from "next";
import { UserUseCase } from "../../../server/use-cases";

const userUseCase = new UserUseCase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await userUseCase.listAll();
    return res.status(200).json({ data: response });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
