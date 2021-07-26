import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Timeline from "../components/Timeline";
import { ITimeline, Skill } from "../model/types";

export default function Home({
  response,
  timeline,
}: {
  response: Skill[];
  timeline: ITimeline[];
}) {
  // console.log(response);
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
              width={200}
              height={200}
              alt={"profile_image"}
            />
          </div>
          <h2 className="sm:col-span-1 sm:justify-self-center sm:text-2xl">
            Muhammad Naufal D.
          </h2>
          <h2 className="col-span-2 sm:col-span-1">
            Blockchain & Front End Developer
          </h2>
        </div>
      </div>
      <div className="mx-8 h-full rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
          <h1 className="md:col-span-2 lg:col-span-3 lg:text-xl">Kewl Skilz</h1>
          {response.map((skill) => (
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
      <Timeline timeline={timeline} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fr = await fetch("http://localhost:3000/api/skill");
  const response = await fr.json();

  const fw = await fetch("http://localhost:3000/api/timeline");
  const timeline = await fw.json();
  return {
    props: { response, timeline },
  };
};
