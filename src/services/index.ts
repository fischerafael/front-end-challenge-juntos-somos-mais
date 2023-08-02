import axios from "axios";
import { IUserResponseDTO } from "../../server/entities";

const api = axios.create({
  baseURL: "/",
});

class APIService {
  getUsers = async (perPage: number, page: number) => {
    const { data } = await api.get<IGetUsersOutput>(
      `api/users?perPage=${perPage}&page=${page}`
    );
    return data;
  };
}

export const services = new APIService();

interface IGetUsersOutput {
  data: IUserResponseDTO[];
}
