const getStudentsByLocation = (arr, city) => arr.filter((student) => student.city === city);

export default getStudentsByLocation;
