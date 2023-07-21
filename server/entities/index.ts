export interface IUserResponseDTO {
  email: string;
  name: {
    first: string;
    last: string;
  };
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    postCode: string;
  };
  avatar: string;
}
