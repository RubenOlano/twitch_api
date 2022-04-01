import { ChakraProvider } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/NavBar/Navbar";
import theme from "../theme/theme";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Main />
          <NextScript />
        </ChakraProvider>
      </body>
    </Html>
  );
}
