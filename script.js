
// массив//
const students = [
    { name: 'Ruslan', age: 20, score: 85, isActive: true },
    { name: 'Asema', age: 17, score: 92, isActive: true },
    { name: 'Samir', age: 22, score: 45, isActive: false },
    { name: 'Adilet', age: 19, score: 70, isActive: true },
];
// массив//



// 1
console.log(students);
console.log(students.length);
console.log(students[0].name, students[0].age);
// 1
// 2
for (const student of students) {
    const score = student.score;

    if (score >= 80 && score <= 100) {
        console.log(student.name, 'отлично');
    } else if (score >= 60 && score <= 79) {
        console.log(student.name, 'хорошо');
    } else if (score >= 40 && score <= 59) {
        console.log(student.name, 'удовлетворительно');
    } else if (score < 40) {
        console.log(student.name, 'не сдал');
    }
}
// 2
// 3
for (const student of students) {
    console.log('студент:',  student.name);
    console.log('возраст:',  student.age);
    console.log('баллы:',  student.score);
    console.log('статус:',  student.isActive);
}
// 3
// 4
function checkStudent(student){
    console.log(student.name, student.score );
}
// 4
// 5
students[0].age = 21
students[2].score = 65 
students[2].isActive = true
students.push({name: 'Meerim', age: 18, score: 95, isActive: true})
// 5
// 6
console.log('набравшие 80 баллов и больше:');

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 80) {
        console.log(students[i].name);
    }
}
console.log('активные:');
for (let i = 0; i < students.length; i++) {
    if (students[i].isActive) {
        console.log(students[i].name);
    }
}
let passedCount = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
        passedCount++;
    }
}

console.log("kоличество студентов, сдавших экзамен: " + passedCount);


// 6
// 7
function getAverageScore(studentsList) {
    if (studentsList.length === 0) return 0;
    
    let totalScore = 0;
    
    for (let i = 0; i < studentsList.length; i++) {
        totalScore += studentsList[i].score;
    }
    
    return totalScore / studentsList.length;
}
const average = getAverageScore(students);
console.log("Средний балл всех студентов: " + average); 
// 7