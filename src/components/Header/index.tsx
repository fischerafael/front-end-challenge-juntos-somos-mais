import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Input } from "../Input";
import * as Icon from "react-icons/hi";

export const Header = () => {
  return (
    <Chakra.HStack w="full" justify="space-between" spacing="4">
      <Chakra.Image
        display={["none", "flex"]}
        src="/logo.svg"
        w="120px"
        alt="Junto Somos Mais Logo"
      />
      <Input
        borderRadius="full"
        inputWidth="full"
        inputMaxWidth="464px"
        leftIcon={Icon.HiOutlineSearch}
        bg="white"
        placeholder="Buscar Usuário"
      />
      <Chakra.Button colorScheme="blue" borderRadius="full" px="8">
        Sair
      </Chakra.Button>
    </Chakra.HStack>
  );
};
