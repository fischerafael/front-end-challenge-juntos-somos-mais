import React from "react";
import * as Chakra from "@chakra-ui/react";

export interface TemplatePrivateProps {
  header: React.ReactNode;
  pageDetails: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

export const TemplatePrivate = ({
  header,
  pageDetails,
  sidebar,
  main,
  footer,
}: TemplatePrivateProps) => {
  return (
    <Chakra.VStack w="full" align="center" spacing="0">
      <Chakra.HStack
        w="full"
        h="15vh"
        bg="gray.50"
        as="header"
        justify="center"
      >
        <Chakra.HStack
          w="full"
          h="full"
          maxW="container.lg"
          px="4"
          justify="center"
        >
          {header}
        </Chakra.HStack>
      </Chakra.HStack>
      <Chakra.HStack
        w="full"
        h="20vh"
        justify="center"
        px="4"
        as="section"
        maxW="container.lg"
      >
        {pageDetails}
      </Chakra.HStack>
      <Chakra.Grid
        templateColumns={["1fr 1fr", "1fr 2fr", "1fr 3fr"]}
        w="full"
        minH="65vh"
        px="4"
        as="section"
        maxW="container.lg"
      >
        <Chakra.VStack as="aside">{sidebar}</Chakra.VStack>
        <Chakra.VStack as="main">{main}</Chakra.VStack>
      </Chakra.Grid>
      <Chakra.HStack
        w="full"
        h="30vh"
        bg="gray.500"
        as="footer"
        justify="center"
      >
        <Chakra.HStack
          w="full"
          h="full"
          maxW="container.lg"
          px="4"
          justify="center"
        >
          {footer}
        </Chakra.HStack>
      </Chakra.HStack>
    </Chakra.VStack>
  );
};
