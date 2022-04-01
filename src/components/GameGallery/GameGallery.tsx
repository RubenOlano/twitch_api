import { SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { GameGalleryProps } from "../../../types/props";
import GameThumbnail from "../GameThumbnail/GameThumbnail";

const GameGallery: FC<GameGalleryProps> = ({ gameRes }) => {
  return (
    <>
      <SimpleGrid p={6} columns={4} spacing={12}>
        {gameRes.map((game) => (
          <GameThumbnail key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGallery;
