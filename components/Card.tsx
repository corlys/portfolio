import React from "react";
import Image from "next/image";
import { Skill } from "../model/types";

const Card = ({ id, title, description, imageUrl }: Skill) => {
  return (
    <div className="bg-indigo-100 sm:w-2/3 md:w-3/4 lg:w-1/2">
      <div className="flex flex-col items-center p-4">
        <Image
          className="rounded-full h-24"
          src={imageUrl}
          layout="fixed"
          width={200}
          height={200}
          alt={"skill_image"}
        />
        <div className="text-xl">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default Card;
