// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Skill } from "../../../model/types";

const skillJson = [
  {
    id: 1,
    title: "Next JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies laoreet risus at pulvinar. Suspendisse porttitor posuere convallis. Donec sem.",
    imageUrl: "https://picsum.photos/id/1039/200/200",
  },
  {
    id: 2,
    title: "Solidity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies laoreet risus at pulvinar. Suspendisse porttitor posuere convallis. Donec sem.",
    imageUrl: "https://picsum.photos/id/1039/200/200",
  },
  {
    id: 3,
    title: "PHP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies laoreet risus at pulvinar. Suspendisse porttitor posuere convallis. Donec sem.",
    imageUrl: "https://picsum.photos/id/1039/200/200",
  },
];

const handler = async (req: NextApiRequest, res: NextApiResponse<Skill>) => {
  
};
