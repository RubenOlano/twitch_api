import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { IStreamRes } from "../../types/twitch";

const Home: NextPage<IStreamRes> = ({ data }) => {
  return (
    <div>
      {data.map((stream) => (
        <Image
          key={stream.id}
          src={stream.thumbnail_url
            .replace("{width}", "900")
            .replace("{height}", "400")}
          alt={stream.title}
          height={400}
          width={900}
        />
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (_context) => {
  const res = await fetch("http://localhost:3000/api/streams");
  const data: IStreamRes = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
