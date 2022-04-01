import { GridItem } from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import Image from "next/image";
import { GameThumbnailProps } from "../../../types/props";

const GameThumbnail: FC<GameThumbnailProps> = ({ game }) => {
  const gameThumbnail = useMemo(() => {
    return game.box_art_url
      .replace("{width}", "285")
      .replace("{height}", "380");
  }, [game]);

  return (
    <GridItem justifyContent="center">
      <h3 style={{ textAlign: "center" }}>{game.name}</h3>
      <Image src={gameThumbnail} alt={game.name} width={285} height={380} />
    </GridItem>
  );
};

export default GameThumbnail;
