import shuffleItem from "./shuffle-item";

//@ts-ignore
export default function deepShuffle(item: any) {
  if (Array.isArray(item)) return shuffleItem(item).map(deepShuffle);

  if (item && typeof item === "object") {
    const keys = Object.keys(item);
    const values = shuffleItem(keys.map((k) => item[k]));
    //@ts-ignore
    return Object.fromEntries(keys.map((k, i) => [k, deepShuffle(values[i])]));
  }

  if (typeof item === "string") return shuffleItem(item);

  return item;
}
