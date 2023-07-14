import dbJson from "../../../data/db.json";

class UseCaseStates {
  async list() {
    const users = await this.loadJSONResults();
    const allStates = users.map((user) => user.location.state);
    const states = this.removeDuplicateFromArray(allStates);
    const sortedStates = this.sortStatesArray(states);
    const statesWithIds = this.setIdToStatesArray(sortedStates);
    return statesWithIds;
  }

  private generateId(i: number) {
    return i + 1;
  }

  private async loadJSONResults() {
    return dbJson.results;
  }

  private removeDuplicateFromArray(stringArray: string[]) {
    return Array.from(new Set(stringArray));
  }

  private sortStatesArray(statesArray: string[]) {
    return statesArray.sort();
  }

  private setIdToStatesArray(statesArray: string[]) {
    return statesArray.map((state, i) => ({
      id: this.generateId(i),
      name: state,
    }));
  }
}

export const useCaseStates = new UseCaseStates();
