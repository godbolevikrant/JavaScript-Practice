
const college={
    collegeName: "Sinhgad College of Engineering",
    location: "Pune",
    established: 1996
}

const student={
    studentName: "Vikrant Godbole",
    age: 30,
    course: "MCA"
}

const mergedObject={...college,...student};

console.log(mergedObject); 
// Output: { collegeName: 'Sinhgad College of Engineering', location: 'Pune', established: 1996, studentName: 'Vikrant Godbole', age: 30, course: 'MCA' }