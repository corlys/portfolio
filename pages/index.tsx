import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad</title>
      </Head>
      <div className="font-mono mx-8 h-84 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-500">
        <div className="py-14 grid grid-cols-2 md:grid-cols-1 gap-4 justify-items-center items-center justify-center">
          <div className="justify-self-end md:col-span-1 md:justify-self-center">
            <img
              className="rounded-full h-24"
              src="https://picsum.photos/id/237/200/200"
            />
          </div>
          <h2 className="justify-self-start md:col-span-1 md:justify-self-center md:text-2xl">Muhammad Naufal D.</h2>
          <h2 className="col-span-2 md:col-span-1">Blockchain & Front End Developer</h2>
        </div>
      </div>
    </>
  );
}
