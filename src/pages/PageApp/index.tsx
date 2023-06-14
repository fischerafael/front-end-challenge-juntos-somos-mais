import { Header } from "@/components/Header";
import { TemplatePrivate } from "@/components/TemplatePrivate";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import { BreadCrumb } from "@/components/BreadCrumb";
import { useRouter } from "next/router";
import { getLastItemFromAsPathArrayAndCapitalize } from "@/utils";

export const PageApp = () => {
  const { asPath } = useRouter();

  return (
    <TemplatePrivate
      header={<Header />}
      pageDetails={
        <Chakra.VStack
          w="full"
          h="full"
          py="4"
          justify="center"
          color="gray.800"
        >
          <BreadCrumb asPath={asPath} />
          <Chakra.Text
            textAlign="start"
            w="full"
            fontSize="2xl"
            fontWeight="bold"
          >
            {getLastItemFromAsPathArrayAndCapitalize(asPath)}
          </Chakra.Text>
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
