import { services } from "@/services";
import { useQuery } from "react-query";

interface IGetUsersInput {
  perPage?: number;
  page?: number;
}

export const useGetUsers = (props: IGetUsersInput) => {
  const { data } = useQuery(
    ["useGetUsers"],
    async () => await services.getUsers(),
    {
      initialData: {
        data: [],
      },
    }
  );

  return {
    users: data?.data || [],
  };
};
