function displayStudents() {
  const studentdiv = document.createElement('div');
  const students = [];
  const student = {
    firstname: fname.value,
    lastname: lname.value,
    dateofbirth: dob.value,
    grade: grade.value,
    sex: checkCheckbox(),
  };
  students.push(student);
  console.log(students);

  studentdiv.textContent = students.forEach((std) => {
    `${std.firstname} ${std.lastname}, Date of Birth is : ${std.dateofbirth} and the grade is ${std.grade}. Your sex is ${std.sex}`;
  });
  document.body.appendChild(studentdiv);
}
let male = document.getElementById('male');
let female = document.getElementById('female');
console.log(male);

function checkCheckbox() {
  if (male.checked == true) {
    return male.value;
  } else if (female.checked == true) {
    return female.value;
  }
}
// // Call the function to fetch and display students when the page loads
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const dob = document.querySelector('#dob');
const grade = document.querySelector('#grade');
// const male = document.getElementsByClassName('#male');
// const female = document.getElementsByClassName('#female');
const button = document.querySelector('#submit');

button.addEventListener('click', displayStudents);
