import { Header } from "@/components/Header";
import { TemplatePrivate } from "@/components/TemplatePrivate";
import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageUser = () => {
  return (
    <TemplatePrivate
      header={<Header />}
      pageDetails={
        <Chakra.VStack w="full" h="full" bg="pink">
          aqui está
        </Chakra.VStack>
      }
      sidebar={
        <Chakra.VStack w="full" bg="green" h="full">
          aqui está
        </Chakra.VStack>
      }
      main={
        <Chakra.VStack w="full" h="full" bg="purple">
          aqui está
        </Chakra.VStack>
      }
      footer={
        <Chakra.VStack w="full" h="full">
          aqui está
        </Chakra.VStack>
      }
    />
  );
};
