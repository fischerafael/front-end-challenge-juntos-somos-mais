import { BreadCrumb } from "@/components/BreadCrumb";
import { Dropdown, IOption } from "@/components/Dropdown";
import { DynamicCheckbox, IItem } from "@/components/DynamicCheckbox";
import { FormControl } from "@/components/FormControl";
import { Header } from "@/components/Header";
import { MainSectionHeader } from "@/components/MainSectionHeader";
import { TemplatePrivate } from "@/components/TemplatePrivate";
import { UserCard } from "@/components/UserCard";
import { IUser } from "@/entities/IUser";
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
      main={
        <Chakra.Grid
          w="full"
          h="full"
          gap="4"
          templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        >
          {MOCKED_USERS.map((user) => (
            <UserCard
              key={user.id!}
              {...user}
              onClick={() => alert(`Cliquei no ${user.name}`)}
            />
          ))}
        </Chakra.Grid>
      }
      footer={
        <Chakra.VStack w="full" h="full">
          aqui está
        </Chakra.VStack>
      }
    />
  );
};

const MOCKED_USERS: IUser[] = [
  {
    id: "1",
    name: "João da Silva",
    street: "Rua das Flores",
    number: "123",
    city: "São Paulo",
    state: "SP",
    postCode: "01234-567",
    thumbnail: "url_da_imagem1.jpg",
  },
  {
    id: "2",
    name: "Maria Souza",
    street: "Avenida das Árvores",
    number: "456",
    city: "Rio de Janeiro",
    state: "RJ",
    postCode: "21000-123",
    thumbnail: "url_da_imagem2.jpg",
  },
  {
    id: "3",
    name: "Pedro Oliveira",
    street: "Travessa dos Passarinhos",
    number: "789",
    city: "Belo Horizonte",
    state: "MG",
    postCode: "30123-456",
    thumbnail:
      "https://img.freepik.com/fotos-gratis/perfil-de-um-homem-barbudo-estiloso-que-fez-um-novo-penteado-na-barbearia_176420-18800.jpg",
  },
  {
    id: "4",
    name: "Ana Costa",
    street: "Rua dos Ventos",
    number: "101",
    city: "Salvador",
    state: "BA",
    postCode: "40000-789",
    thumbnail: "url_da_imagem4.jpg",
  },
  {
    id: "5",
    name: "Carlos Santos",
    street: "Avenida das Ondas",
    number: "2020",
    city: "Recife",
    state: "PE",
    postCode: "50000-999",
    thumbnail: "url_da_imagem5.jpg",
  },
];
