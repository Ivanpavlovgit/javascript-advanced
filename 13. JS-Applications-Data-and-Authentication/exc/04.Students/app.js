async function displayAllStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    const studentList = Object.values(data);
    studentList.map(createStudent);


    // for (let i = 0; i <studentList.length ; i++) {
    //     createStudent(studentList[i]);
    // }


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

const studentRows = document.getElementById('studentRows');
const form = document.querySelector('form');
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
    console.log(student);
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

form.addEventListener('submit', submitNewStudent)
window.addEventListener('load', displayAllStudents);

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) === 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}