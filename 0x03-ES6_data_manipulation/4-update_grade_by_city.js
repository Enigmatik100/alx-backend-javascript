const updateStudentGradeByCity = (arr, city, newGrades) => arr.filter((s) => s.location === city)
  .map((student) => {
    const studentGrade = newGrades.filter((v) => v.studentId === student.id);
    const updateStudent = student;
    if (studentGrade.length > 0) {
      updateStudent.grade = studentGrade[0].grade;
    } else {
      updateStudent.grade = 'N/A';
    }
    return student;
  });

export default updateStudentGradeByCity;
