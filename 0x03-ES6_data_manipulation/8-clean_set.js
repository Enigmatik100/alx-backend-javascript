const cleanSet = (set, startString) => {
  if (set instanceof Set && typeof startString === 'string' && startString.length > 0) {
    const res = [];
    for (const el of set) {
      if (el.startsWith(startString)) {
        let substr = el;
        while (substr.startsWith(startString)) {
          substr = substr.substring(startString.length);
        }
        res.push(substr);
      }
    }
    return res.join('-');
  }
  return '';
};
export default cleanSet;
