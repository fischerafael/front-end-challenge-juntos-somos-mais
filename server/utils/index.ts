export class Formatters {
  capitilizeFirstLetterOfAWord(word: string): string {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  }

  capitalizeFirstLetterOfWordOfASetenece(sentence: string): string {
    const words = sentence.split(" ");
    const capitalizedWords = words.map((word) => {
      return this.capitilizeFirstLetterOfAWord(word);
    });
    return capitalizedWords.join(" ");
  }

  getNumber(string: string): string {
    const [number] = string.split(" ");
    return number;
  }

  getStreet(string: string): string {
    return string.split(" ").slice(1).join(" ").trim();
  }
}
