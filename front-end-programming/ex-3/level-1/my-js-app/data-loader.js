export async function loadStudents() {
    const response = await fetch('./students.json');
    const students = await response.json();
    return students;
  }
  