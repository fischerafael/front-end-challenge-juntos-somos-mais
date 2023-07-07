import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Dropdown, IOption } from "../Dropdown";
import { FormControl } from "../FormControl";

interface MainSectionHeaderProps {
  title: React.ReactElement;
  dropdown: React.ReactElement;
}

export const MainSectionHeader = ({
  title,
  dropdown,
}: MainSectionHeaderProps) => {
  return (
    <Chakra.HStack
      w="full"
      justify="space-between"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="6"
      align="flex-start"
      p="4"
    >
      {title}
      {dropdown}
    </Chakra.HStack>
  );
};
