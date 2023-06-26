import React from "react";
import * as Chakra from "@chakra-ui/react";

export interface IItem {
  id: string;
  label: string;
}

interface DynamicCheckboxProps {
  options: IItem[];
  handleToggleState: (stateOfRepulic: IItem) => void;
  checkIsChecked: (opt: IItem) => boolean;
}

export const DynamicCheckbox = ({
  options,
  checkIsChecked,
  handleToggleState,
}: DynamicCheckboxProps) => {
  return (
    <Chakra.VStack
      align="flex-start"
      w="full"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="6"
      p="4"
    >
      <Chakra.Text fontWeight="bold">Por Estado</Chakra.Text>

      {options.map((opt) => {
        const isChecked = checkIsChecked(opt);

        return (
          <Chakra.Checkbox
            key={opt.id}
            onChange={() => handleToggleState(opt)}
            isChecked={isChecked}
          >
            {opt.label}
          </Chakra.Checkbox>
        );
      })}
    </Chakra.VStack>
  );
};
