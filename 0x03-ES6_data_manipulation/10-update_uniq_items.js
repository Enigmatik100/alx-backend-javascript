const updateUniqueItems = (map) => {
  if (Object.getPrototypeOf(map) !== Map.prototype) throw new TypeError('Cannot process');
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
};
export default updateUniqueItems;
