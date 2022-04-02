import { SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { IGameRes, IStreamRes } from "../../../types/twitch";
import Thumbnails from "../../components/Gallery/Gallery";

const Home: NextPage<IStreamRes> = ({ data }) => {
  return (
    <SimpleGrid p={6} columns={4} spacing={5}>
      {data.map((stream) => {
        return <Thumbnails key={stream.id} {...stream} />;
      })}
    </SimpleGrid>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const game = params?.game;
  const gameRes = await fetch(`http://localhost:3000/api/games/${game}`);
  const idData = await gameRes.json();

  const gameId = idData[0]?.id;
  const query = gameId ? `game_id=${gameId}` : "";
  const res = await fetch(`http://localhost:3000/api/streams/${query}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/games/");
  const { data }: IGameRes = await res.json();

  const paths = data?.map((game) => game.name.toLowerCase());

  return {
    paths: paths?.map((game) => ({ params: { game } })),
    fallback: false,
  };
};
