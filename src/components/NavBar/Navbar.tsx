import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    if (router.pathname === "/") return;
    router.push("/");
  };

  return (
    <Box
      onClick={handleClick}
      fontFamily="heading"
      fontSize="5xl"
      height="9vh"
      width="100vw"
      background="purple.600"
      justifyItems="center"
      color="white"
      padding={4}
      marginBottom={4}
    >
      <Box verticalAlign="baseline" as="h1">
        Twitch Streams
      </Box>
    </Box>
  );
};

export default Navbar;
