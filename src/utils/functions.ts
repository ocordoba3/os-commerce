export function capitalize(text: string) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export const titleCase = (text: string) =>
  text
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
