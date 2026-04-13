//your JS code here. If required.
// Fetch students.json asynchronously (no require)
fetch('./students.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load students.json: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(students => {
    console.log("=== Student Average Grades ===\n");

    const results = students.map(student => {
      const total = student.grades.reduce((sum, grade) => sum + grade, 0);
      const average = (total / student.grades.length).toFixed(2);
      return { name: student.name, average: parseFloat(average) };
    });

    // Log each student's average
    results.forEach(({ name, average }) => {
      console.log(`${name}: Average Grade = ${average}`);
    });

    console.log("\n=== Full Results ===");
    console.table(results);
  })
  .catch(error => {
    console.error("Error reading student data:", error.message);
  });
