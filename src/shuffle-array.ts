export default function shuffleArray(item: any) {
  const itemArray = typeof item === "string" ? [...item] : item;

  let newItemArrayy = [...Array(itemArray.length)].map(() => {
    const index = Math.floor(Math.random() * itemArray.length);
    return itemArray.splice(index, 1)[0];
  });

  if (typeof item === "string") return newItemArrayy.join("");
  return newItemArrayy;
}
