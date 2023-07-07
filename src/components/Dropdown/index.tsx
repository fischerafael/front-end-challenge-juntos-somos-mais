import React from "react";
import * as Chakra from "@chakra-ui/react";

export interface IOption {
  value: string;
  label: string;
}

interface DropdownProps extends Chakra.SelectProps {
  options?: IOption[];
}

export const Dropdown = ({ options = [], ...rest }: DropdownProps) => {
  return (
    <Chakra.Select {...rest}>
      {options.map((op) => (
        <option key={op.value} value={op.value}>
          {op.label}
        </option>
      ))}
    </Chakra.Select>
  );
};
