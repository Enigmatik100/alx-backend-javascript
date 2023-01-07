const updateStudentGradeByCity = (arr, city, newGrades) => arr.filter((s) => s.location === city)
  .map((student) => {
    const studentGrade = newGrades.find((v) => v.studentId === student.id);
    const updateStudent = student;
    if (studentGrade) {
      updateStudent.grade = studentGrade.grade;
    } else {
      updateStudent.grade = NaN;
    }
    return student;
  });

export default updateStudentGradeByCity;
