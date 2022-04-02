import { SimpleGrid } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { langs } from "../../../structs/Languages";
import { IStreamRes } from "../../../types/twitch";
import Thumbnails from "../../components/Gallery/Gallery";

const Home: NextPage<IStreamRes> = ({ data }) => {
  return (
    <>
      <SimpleGrid p={6} columns={4} spacing={5}>
        {data.map((stream) => {
          return <Thumbnails key={stream.id} {...stream} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const lang = params?.lang;
  const query = lang ? `?language=${lang}` : "";
  const res = await fetch(`http://localhost:3000/api/streams/${query}`);
  const data: IStreamRes = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = langs.map((lang) => lang["639-1 code"]);
  return {
    paths: paths.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};
