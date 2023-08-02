import data from "../../src/data/db.json";
import { IUserResponseDTO } from "../entities";
import { Formatters } from "../utils";

const formatters = new Formatters();

export class UserUseCase {
  private repository = data;

  async listAll() {
    const formattedUsers = this.repository.results.map<IUserResponseDTO>(
      (user) => ({
        email: user.email,
        address: {
          city: formatters.capitalizeFirstLetterOfWordOfASetenece(
            user.location.city
          ),
          postCode: String(user.location.postcode),
          state: formatters.capitalizeFirstLetterOfWordOfASetenece(
            user.location.state
          ),
          number: formatters.getNumber(user.location.street),
          street: formatters.capitalizeFirstLetterOfWordOfASetenece(
            formatters.getStreet(user.location.street)
          ),
        },
        name: {
          first: formatters.capitalizeFirstLetterOfWordOfASetenece(
            user.name.first
          ),
          last: formatters.capitalizeFirstLetterOfWordOfASetenece(
            user.name.last
          ),
        },
        avatar: user.picture.thumbnail,
      })
    );
    return formattedUsers;
  }

  private calculateMaxPage(userLen: number, perPage: number) {
    return Math.ceil(userLen / perPage);
  }

  private isValidPage(userLen: number, perPage: number, page: number) {
    const maxPage = this.calculateMaxPage(userLen, perPage);
    const isValidPage = page > 0 && page <= maxPage;
    return isValidPage;
  }

  private paginatedUsers(
    users: IUserResponseDTO[],
    perPage: number,
    page: number
  ) {
    if (!this.isValidPage) {
      return [];
    }

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return users.slice(startIndex, endIndex);
  }

  async listAllPaginated(perPage: number, page: number) {
    const allUser = await this.listAll();
    return {
      data: this.paginatedUsers(allUser, perPage, page),
      count: allUser.length,
      pages: this.calculateMaxPage(allUser.length, perPage),
    };
  }
}
