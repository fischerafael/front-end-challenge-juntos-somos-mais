import { NextApiRequest, NextApiResponse } from "next";
import { UserUseCase } from "../../../server/use-cases";

const userUseCase = new UserUseCase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === "GET") {
    if (query.perPage && query.page) {
      const { perPage, page } = query;
      const { data, count, pages } = await userUseCase.listAllPaginated(
        Number(perPage as string),
        Number(page as string)
      );
      return res.status(200).json({ data: data, count: count, pages: pages });
    }

    const response = await userUseCase.listAll();
    return res.status(200).json({ data: response, count: response.length });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
