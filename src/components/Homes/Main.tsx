import { GetStaticProps } from "next";
import React, { FC } from "react";
import { IStreamRes } from "../../../types/twitch";

const Main: FC<IStreamRes> = ({ data }) => {
  console.log(data);

  return <div>Home</div>;
};

export default Main;

export const getStaticProps: GetStaticProps = async (_context) => {
  const res = await fetch("/api/streams");
  const data: IStreamRes = await res.json();
  return {
    props: {
      data,
    },
  };
};
