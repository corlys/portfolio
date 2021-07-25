// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Error, Skill } from "../../../model/types";
import skills from "../../../data/skills";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Skill[] | Error>
) => {
  try {
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};

export default handler;
