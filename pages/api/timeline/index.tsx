import type { NextApiRequest, NextApiResponse } from "next";
import { Error, ITimeline } from "../../../model/types";
import timeline from "../../../data/timeline";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Error | ITimeline[]>
) => {
  try {
    return res.status(200).json(timeline);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};

export default handler;
