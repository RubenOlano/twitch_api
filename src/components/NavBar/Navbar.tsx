import { Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Center
      fontFamily="heading"
      fontSize="5xl"
      height="8vh"
      width="100vw"
      background="purple.600"
      color="white"
      padding={4}
      marginBottom={4}
    >
      <Link href="/" passHref>
        <Box as="h1">Twitch Streams</Box>
      </Link>
    </Center>
  );
};

export default Navbar;
