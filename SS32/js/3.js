class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const numberOfStudents = parseInt(prompt('Nhập số lượng sinh viên:'), 10);
const studentsArray = [];

for (let i = 0; i < numberOfStudents; i++) {
    const id = prompt(`Nhập ID của sinh viên thứ ${i + 1}:`);
    const name = prompt(`Nhập tên của sinh viên thứ ${i + 1}:`);
    const student = new Student(id, name);
    studentsArray.push(student);
}

console.log('Danh sách sinh viên:');
for (const student of studentsArray) {
    console.log(`ID: ${student.id}, Tên: ${student.name}`);
}
