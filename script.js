// Funkcja podwajania liczb 
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

// Testowanie funkcji
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers);

console.log("Oryginalna tablica:", numbers);
console.log("Tablica podwojona:", doubledNumbers);

// Funkcja do wyświetlania studentów
function getStudentNames(students) {
    return students.map(student => student.name);
}

// Testowanie funkcji
const students = [
    { name: "Ola", age: 20 },
    { name: "Anna", age: 22 },
    { name: "Karol", age: 19 },
    { name: "Adam", age: 20 }
];

const studentNames = getStudentNames(students);

console.log("Oryginalna tablica studentów:", students);
console.log("Tablica z imionami studentów:", studentNames);

