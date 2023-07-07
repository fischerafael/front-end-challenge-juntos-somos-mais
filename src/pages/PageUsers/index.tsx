import { BreadCrumb } from "@/components/BreadCrumb";
import { Dropdown, IOption } from "@/components/Dropdown";
import { DynamicCheckbox, IItem } from "@/components/DynamicCheckbox";
import { FormControl } from "@/components/FormControl";
import { Header } from "@/components/Header";
import { MainSectionHeader } from "@/components/MainSectionHeader";
import { TemplatePrivate } from "@/components/TemplatePrivate";
import { getLastItemFromAsPathArrayAndCapitalize } from "@/utils";
import * as Chakra from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const LIST_OF_STATES: IItem[] = [
  {
    id: "1",
    label: "Paraná",
  },
  {
    id: "2",
    label: "Santa Catarina",
  },
  {
    id: "3",
    label: "Rio Grande do Sul",
  },
];

const OPTIONS: IOption[] = [
  {
    label: "Nome",
    value: "name",
  },
  {
    label: "Idade",
    value: "age",
  },
];

interface IPageUserState {
  selectedStates: IItem[];
}

const INITIAL_STATE: IPageUserState = {
  selectedStates: [
    {
      id: "3",
      label: "Rio Grande do Sul",
    },
    {
      id: "2",
      label: "Santa Catarina",
    },
  ],
};

export const PageUser = () => {
  const { asPath } = useRouter();

  const [state, setState] = useState<IPageUserState>(INITIAL_STATE);

  console.log(state);

  const handleToggleState = (stateOfRepulic: IItem) => {
    const isAlreadyInState = state.selectedStates.find(
      (st) => st.id === stateOfRepulic.id
    );

    if (isAlreadyInState) {
      const updatedStates = state.selectedStates.filter(
        (st) => st.id !== stateOfRepulic.id
      );
      setState((prev) => ({ ...prev, selectedStates: updatedStates }));
      return;
    }

    const updatedStates = [...state.selectedStates, stateOfRepulic];
    setState((prev) => ({
      ...prev,
      selectedStates: updatedStates,
    }));
  };

  const mainSectionHeaderTitle = `Exibindo 9 de 10`;
  const mainSectionHeaderOptions = OPTIONS;

  const checkIsChecked = (opt: IItem): boolean => {
    const isChecked = state.selectedStates.find((st) => st.id === opt.id);
    return !!isChecked;
  };

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
        <Chakra.VStack w="full" h="full" align="flex-start">
          <DynamicCheckbox
            options={LIST_OF_STATES}
            handleToggleState={handleToggleState}
            checkIsChecked={checkIsChecked}
          />
        </Chakra.VStack>
      }
      headerMain={
        <MainSectionHeader
          title={<Chakra.Text w="full">{mainSectionHeaderTitle}</Chakra.Text>}
          dropdown={
            <FormControl
              label="Ordernar por:"
              inputElement={
                <Dropdown
                  color="gray.500"
                  maxW="200px"
                  options={mainSectionHeaderOptions}
                  variant="unstyled"
                />
              }
            />
          }
        />
      }
      main={<Chakra.VStack w="full" h="full"></Chakra.VStack>}
      footer={
        <Chakra.VStack w="full" h="full">
          aqui está
        </Chakra.VStack>
      }
    />
  );
};
