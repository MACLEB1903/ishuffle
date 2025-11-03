import shuffleItem from "./shuffle-item.js";
import deepShuffle from "./deep-shuffle.js";

export default function ishuffle(...args: any[]) {
  const SINGLE_FLAG_KEYS = ["shuffle"];
  const BOTH_FLAG_KEYS = ["shuffle", "useNested"];

  const argsCount = args.length;

  const isArgObject =
    typeof args[0] === "object" &&
    args[0] !== null &&
    !Array.isArray(args[0]) &&
    argsCount === 1;

  const usesShuffleOnly =
    isArgObject &&
    JSON.stringify(Object.keys(args[0]).sort()) ===
      JSON.stringify(SINGLE_FLAG_KEYS);

  const usesShuffleAndNested =
    isArgObject &&
    JSON.stringify(Object.keys(args[0]).sort()) ===
      JSON.stringify(BOTH_FLAG_KEYS.sort());

  if (!argsCount) throw new Error("Did you mean ishuffle('Hello World!')?");

  if (usesShuffleAndNested || usesShuffleOnly) {
    if (usesShuffleOnly) return shuffleItem(args[0].shuffle);

    return [deepShuffle(args[0].shuffle)];
  }

  const newArr = args.map((item) => shuffleItem(item));
  return argsCount === 1 ? [newArr[0]] : [newArr];
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = ishuffle;
}
