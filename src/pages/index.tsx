import { SimpleGrid } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { IStreamRes } from "../../types/twitch";
import Thumbnails from "../components/Gallery/Gallery";

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

export const getStaticProps: GetStaticProps = async (_context) => {
  const res = await fetch("http://localhost:3000/api/streams");
  const data: IStreamRes = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
