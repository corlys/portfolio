import { useState } from "react";
import { GetStaticProps } from "next";
import skills from "../data/skills";
import timeline from "../data/timeline";
import portfolio from "../data/portfolio";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Timeline from "../components/Timeline";
import Portfolio from "../components/Portfolio";
import { IPortfolio, ITimeline, Skill } from "../model/types";

export default function Home({
  skills,
  timeline,
}: {
  skills: Skill[];
  timeline: ITimeline[];
  portfolio: IPortfolio[];
}) {
  const [tab, setTab] = useState(0);
  // console.log(skills);
  return (
    <div className="flex flex-col gap-5 font-mono">
      <Head>
        <title>Muhammad</title>
      </Head>
      <div className="mx-8 h-84 rounded-b-lg bg-gradient-to-r from-indigo-400 to-purple-500">
        <div className="py-14 grid sm:grid-cols-1 gap-4 justify-items-center items-center justify-center">
          <div className="sm:col-span-1 sm:justify-self-center">
            <Image
              className="rounded-full h-24"
              src="https://picsum.photos/id/237/200/200"
              layout="fixed"
              width={100}
              height={100}
              alt={"profile_image"}
            />
          </div>
          <h2 className="sm:col-span-1 sm:justify-self-center sm:text-2xl">
            Muhammad Naufal D.
          </h2>
          <h2 className="sm:col-span-1 text-center">
            Blockchain & Front End Developer
          </h2>
        </div>
      </div>
      <div className="mx-8 h-full rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
          <h1 className="md:col-span-2 lg:col-span-3 lg:text-xl">My Skills</h1>
          {skills.map((skill) => (
            <Card
              key={skill.id}
              id={skill.id}
              title={skill.title}
              description={skill.description}
              imageUrl={skill.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          onClick={() =>
            setTab((prev) => {
              return prev === 0 ? 1 : 0;
            })
          }
          className="mx-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {tab === 0 ? "Switch to Portfolio" : "Switch to Timeline"}
        </button>
      </div>
      {tab === 0 ? (
        <Timeline timeline={timeline} />
      ) : (
        <Portfolio portfolio={portfolio} />
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { skills, timeline, portfolio },
  };
};
