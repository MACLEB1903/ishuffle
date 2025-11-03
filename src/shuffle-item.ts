import shuffleArray from "./shuffle-array.js";
import shuffleObject from "./shuffle-object.js";

export default function shuffleItem(item: any) {
  const shuffleableTypes = ["array", "string", "object"];

  const itemType = Array.isArray(item)
    ? "array"
    : typeof item === "string"
    ? "string"
    : typeof item === "object" && item !== null
    ? "object"
    : typeof item;

  if (!shuffleableTypes.includes(itemType)) return item;
  if (itemType === "string" || itemType === "array") return shuffleArray(item);

  return shuffleObject(item);
}
