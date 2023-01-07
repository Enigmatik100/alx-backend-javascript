const getStudentIdsSum = (arr) => arr.reduce((acc, curr) => acc + curr.id, 0);
export default getStudentIdsSum;
