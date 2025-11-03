export default function shuffleObject(item: any) {
  if (!item) return item;

  const shuffledObject = {};
  const keys = Object.keys(item);
  const values = Object.values(item);

  if (!keys.length) return {};
  //@ts-ignore
  if (keys.length === 1) return { [keys[0]]: values[0] };

  let derangedValues;

  do {
    derangedValues = [...values]
      .map((value) => [Math.random(), value])
      //@ts-ignore
      .sort((a, b) => a[0] - b[0])
      .map(([_, value]) => value);
  } while (derangedValues.some((v, i) => v === values[i]));

  for (const [i, key] of keys.entries()) {
    //@ts-ignore
    shuffledObject[key] = derangedValues[i];
  }

  return shuffledObject;
}
