const getListStudentIds = (arr) => {
  if (arr instanceof Array) {
    return arr.map((student) => student.id);
  }
  return [];
};
export default getListStudentIds;
