import { IUser } from "@/entities/IUser";
import * as Chakra from "@chakra-ui/react";

interface UserCardProps extends IUser {
  onClick: () => void;
}

export const UserCard = (props: UserCardProps) => {
  const address = `${props.street}, ${props.number}`;
  const stateZipCode = `${props.state} - CEP: ${props.postCode}`;

  return (
    <Chakra.VStack
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="6"
      align="center"
      p="8"
      color="gray.700"
      spacing="4"
      textAlign="center"
      justify="space-between"
      cursor="pointer"
      _hover={{
        shadow: "lg",
      }}
      transition="0.5s"
      onClick={props.onClick}
    >
      <Chakra.Avatar
        bg="gray.100"
        src={props.thumbnail}
        color="gray.600"
        name={props.name}
        size="lg"
      />
      <Chakra.Text fontWeight="medium">{props.name}</Chakra.Text>
      <Chakra.Text fontSize="sm">{address}</Chakra.Text>
      <Chakra.VStack spacing="0">
        <Chakra.Text fontSize="xs">{props.city}</Chakra.Text>
        <Chakra.Text fontSize="xs">{stateZipCode}</Chakra.Text>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
