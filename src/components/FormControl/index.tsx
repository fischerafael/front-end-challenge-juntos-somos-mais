import React from "react";
import * as Chakra from "@chakra-ui/react";

interface FormControlProps {
  inputElement: React.ReactNode;
  label: string;
}

export const FormControl = ({ inputElement, label }: FormControlProps) => {
  return (
    <Chakra.HStack
      as={Chakra.FormControl}
      justify="flex-end"
      align="flex-start"
    >
      <Chakra.FormLabel fontWeight="medium" wordBreak="keep-all">
        {label}
      </Chakra.FormLabel>
      {inputElement}
    </Chakra.HStack>
  );
};
