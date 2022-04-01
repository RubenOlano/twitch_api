import type { GetStaticProps, NextPage } from "next";
import { IGameRes } from "../../../types/twitch";
import GameGallery from "../../components/GameGallery/GameGallery";

const Home: NextPage<IGameRes> = ({ data }) => {
  return <GameGallery gameRes={data} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async (_context) => {
  const res = await fetch("http://localhost:3000/api/games");
  const data: IGameRes = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
