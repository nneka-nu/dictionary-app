export const capitalCaseText = (text: string) => {
  return text.length >= 2
    ? text[0].toUpperCase() + text.slice(1).toLowerCase()
    : text;
};
