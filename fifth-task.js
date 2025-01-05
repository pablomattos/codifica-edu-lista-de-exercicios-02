let students = [
    { name: "João", grade1: 8, grade2: 7 },
    { name: "Maria", grade1: 10, grade2: 6 },
    { name: "Pedro", grade1: 10, grade2: 8 }
];

for (let student of students) {
    let average = (student.grade1 + student.grade2) / 2;
    console.log(`Nome: ${student.name}, Média: ${average}`);
}
