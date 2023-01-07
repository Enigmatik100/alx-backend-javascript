const hasValuesFromArray = (set, arr) => {
  const arraySet = new Set(arr);
  for (const e of arraySet) {
    if (!set.has(e)) {
      return false;
    }
  }
  return true;
};
export default hasValuesFromArray;
