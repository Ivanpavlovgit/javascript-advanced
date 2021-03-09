
const studentRows = document.getElementById('studentRows');
const form = document.querySelector('form');
form.addEventListener('submit', submitNewStudent)
window.addEventListener('load', displayAllStudents);
async function displayAllStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    const studentList = Object.values(data);
    studentList.map(createStudent);
}
function createStudent(data) {
    const student = {
        firstName: data.firstName,
        lastName: data.lastName,
        facultyNumber: data.facultyNumber,
        grade: data.grade
    }
    studentView(student)
}

function studentView(student) {
    const studentRow = document.createElement('tr');
    studentRow.innerHTML = `
        <th>${student.firstName}</th>
        <th>${student.lastName}</th>
        <th>${student.facultyNumber}</th>
        <th>${student.grade}</th>`;
    studentRows.appendChild(studentRow);
}

//submit function is not needed by the new task rules but did it anyway
async function submitNewStudent(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const student = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        facultyNumber: formData.get('facultyNumber'),
        grade: formData.get('grade'),
    };

   // console.log(student);

    if (student.firstName === '' ||
        student.lastName === '' ||
        student.facultyNumber === '' ||
        student.grade === '') {
        return alert('All fields are required');
    }
    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            //does not need auth token
        },
        body: JSON.stringify(student)
    });
    if (response.ok) {
createStudent(student);
    } else {
        const error = await response.json();
        alert(error.message);
    }


}


