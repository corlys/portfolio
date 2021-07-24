import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 font-mono">
      <Head>
        <title>Muhammad</title>
      </Head>
      <div className="mx-8 h-84 rounded-b-lg bg-gradient-to-r from-indigo-400 to-purple-500">
        <div className="py-14 grid sm:grid-cols-1 gap-4 justify-items-center items-center justify-center">
          <div className="sm:col-span-1 sm:justify-self-center">
            <img
              className="rounded-full h-24"
              src="https://picsum.photos/id/237/200/200"
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
        <div className="py-16 grid grid-cols-3 justify-items-center gap-5">
          <h1 className="col-span-3">Kewl Skilz</h1>
          <div className="bg-white w-1/2">
            <div className="flex flex-col items-center p-4">
              <img
                className="rounded-full h-24"
                src="https://picsum.photos/id/1039/200/200"
              />
              <div className="text-xl">Next JS</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, iusto rerum incidunt repudiandae quod qui aut labore
                iure culpa voluptatem?
              </div>
            </div>
          </div>
          <div className="bg-white w-1/2">
            <div className="flex flex-col items-center p-4">
              <div className="text-xl">Solidty</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci consequuntur voluptatibus amet minus et id rerum, natus
                doloribus non molestiae!
              </div>
            </div>
          </div>
          <div className="bg-white w-1/2">
            <div className="flex flex-col items-center p-4">
              <div className="text-xl">PHP</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                consectetur eligendi porro ducimus dolores commodi dolor natus
                alias veniam cum!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const getStaticProps: GetStaticProps<Skill[]> = async (context) => {
//   const fr = await fetch("../../data/skill.json");
//   const response = await fr.json();
//   console.log(response);
//   return {
//     props: response,
//   };
// };
