// Function to sort students based on the total score (biology + chemistry)
function sortStudentsByScore(students) {
  return students.sort(
    (a, b) => b.biology + b.chemistry - (a.biology + a.chemistry)
  );
}

// Function to compare the result with the expected order (ans)
function compareWithExpected(result, expected) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].name !== expected[i]) {
      return false;
    }
  }
  return true;
}

// Read the student.txt file
fetch('student.txt')
  .then((response) => response.text())
  .then((data) => {
    // Parse the data (assuming it's in JSON format)
    const students = JSON.parse(data);

    // Sort students based on scores
    const sortedStudents = sortStudentsByScore(students);

    // Define the expected order
    const expectedOrder = [
      'virat',
      'leo',
      'cristiano',
      'rohit',
      'viswanath anand',
    ];

    // Compare the result with the expected order
    const isCorrect = compareWithExpected(sortedStudents, expectedOrder);

    // Output the result and whether it matches the expected order
    console.log('Sorted Students:', sortedStudents);
    console.log('Order is Correct:', isCorrect);
  })
  .catch((error) => {
    console.error('Error reading the file:', error);
  });
