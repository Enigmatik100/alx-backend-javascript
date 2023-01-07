const getStudentsByLocation = (arr, city) => arr.filter((student) => student.location === city);
export default getStudentsByLocation;
