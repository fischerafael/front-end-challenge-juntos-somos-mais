import React from "react";
import * as Chakra from "@chakra-ui/react";

import { IconType } from "react-icons";

interface InputProps extends Chakra.InputProps {
  label?: string;
  helperText?: string;
  leftIcon?: IconType;
  inputWidth?: string;
  inputMaxWidth?: string;
}

export const Input = ({
  inputWidth = "full",
  inputMaxWidth = "full",
  label,
  helperText,
  leftIcon,
  ...props
}: InputProps) => {
  return (
    <Chakra.FormControl w={inputWidth} maxW={inputMaxWidth}>
      {!!label && (
        <Chakra.FormLabel fontSize="xs" fontWeight="normal">
          {label}
        </Chakra.FormLabel>
      )}
      <Chakra.InputGroup>
        {!!leftIcon && (
          <Chakra.InputLeftElement pointerEvents="none">
            <Chakra.Icon color="gray.500" as={leftIcon} />
          </Chakra.InputLeftElement>
        )}
        <Chakra.Input fontSize="xs" w="full" {...props} />
      </Chakra.InputGroup>
      {!!helperText && (
        <Chakra.FormHelperText fontSize="xs" fontWeight="normal">
          {helperText}
        </Chakra.FormHelperText>
      )}
    </Chakra.FormControl>
  );
};
