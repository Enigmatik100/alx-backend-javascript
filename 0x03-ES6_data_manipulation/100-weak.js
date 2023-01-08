const weakMap = new WeakMap();

const queryAPI = (endPoint) => {
  if (weakMap.has(endPoint)) {
    if (weakMap.get(endPoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  } else {
    weakMap.set(endPoint, 1);
  }
};

export { weakMap, queryAPI };
