const cleanSet = (set, startString) => {
  if (startString.length > 0) {
    const res = [];
    for (const el of set) {
      if (el.startsWith(startString)) {
        res.push(el.substring(startString.length));
      }
    }
    return res.join('-');
  }
  return '';
};
export default cleanSet;
