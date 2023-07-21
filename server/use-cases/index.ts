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
}
