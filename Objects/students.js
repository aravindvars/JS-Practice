const apiUrl = 'https://example.com/api/students'; // This API will fetch the data from the backend database

// Function to fetch and display student data
async function displayStudents() {
  const studentListElement = document.getElementById('studentList');
  const studentdiv = document.createElement('div');
  studentdiv.innerHTML = `${fname.value} ${lname.value}, Date of Birth is : ${dob.value} and the grade is ${grade.value}`;
  document.body.appendChild(studentdiv);

  // const students = [
  //   // (this.fname = fname),
  //   // (this.lname = lname),
  //   // (this.dob = dob),
  //   // (this.grade = grade),
  // ];
  // const student = {
  //   fname,
  //   lname,
  //   dob,
  //   grade,
  // };
  // // Now you have the 'students' data array, you can display it on the screen.
  // // For example, if you have a <div> with id="studentList":
  // const studentListElement = document.getElementById('studentList');
  // // studentListElement.innerHTML = '';
  // students.forEach((student) => {
  //   const studentDiv = document.createElement('div');
  //   studentDiv.textContent = `${student.fname} ${student.lname} - DOB: ${student.dob} - Grade: ${student.grade}`;
  //   studentListElement.appendChild(studentDiv);
  // });
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  // }
}

// Call the function to fetch and display students when the page loads
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const dob = document.querySelector('#dob');
const grade = document.querySelector('#grade');
const button = document.querySelector('#submit');

button.addEventListener('click', displayStudents);
