export const getArrayFromAsPath = (asPath: string): string[] => {
  const linksArray = asPath.split("/");
  const filteredLinksArray = linksArray.filter((link) => !!link);
  return filteredLinksArray;
};

export const capitalizeFirstLetterOfAString = (string?: string): string => {
  if (!string) return "";
  return string!.charAt(0).toUpperCase() + string!.slice(1);
};

export const getLastItemFromAsPathArrayAndCapitalize = (
  asPath: string
): string => {
  return capitalizeFirstLetterOfAString(getArrayFromAsPath(asPath).pop());
};

interface IFormattedLink {
  href: string;
  title: string;
}
[];

export const getBreadCrumbLinks = (asPath: string): IFormattedLink[] => {
  const filteredLinksArray = getArrayFromAsPath(asPath);
  const finalLinksArray = filteredLinksArray.map((_, index, array) => {
    const currentLinkArray = array.slice(0, index + 1);
    const href = `/${currentLinkArray.join("/")}`;
    const lastWord = [...currentLinkArray].pop();
    const title = capitalizeFirstLetterOfAString(lastWord);
    return {
      href: href,
      title: title,
    };
  });
  return finalLinksArray || [];
};
