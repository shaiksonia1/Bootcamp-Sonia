document.addEventListener('DOMContentLoaded', () => {
  // Function to fetch and render student data
  async function loadStudents() {
    try {
      const response = await fetch('students.json'); // Fetch the JSON file
      const students = await response.json(); // Parse the JSON data
      renderTable(students); // Render the table with the data
    } catch (error) {
      console.error('Error loading student data:', error);
    }
  }

  // Function to render the student data into the table
  function renderTable(students) {
    const tbody = document.querySelector('#student-table tbody');
    tbody.innerHTML = ''; // Clear any existing rows

    students.forEach(student => {
      const tr = document.createElement('tr'); // Create a new row
      const tdId = document.createElement('td');
      tdId.textContent = student.id;
      const tdName = document.createElement('td');
      tdName.textContent = student.name;
      const tdAge = document.createElement('td');
      tdAge.textContent = student.age;
      const tdGrade = document.createElement('td');
      tdGrade.textContent = student.grade;

      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdAge);
      tr.appendChild(tdGrade);

      tbody.appendChild(tr); // Append the row to the table
    });
  }

  // Event listener for toggling the font
  const fontButton = document.getElementById('change-font-btn');
  let fontToggled = false; // Variable to keep track of the toggle state

  fontButton.addEventListener('click', () => {
    const table = document.querySelector('table');

    if (fontToggled) {
      // Revert to original font
      table.style.fontFamily = ''; // Reset the font family to default
      fontToggled = false;
    } else {
      // Change to Roboto font
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';

      // Append the link element to the document's head only once
      if (!document.head.contains(link)) {
        document.head.appendChild(link);
      }

      // Change the font of the table to Roboto
      table.style.fontFamily = 'Roboto, sans-serif';
      fontToggled = true;
    }
  });

  // Load and render students when the page is loaded
  loadStudents();
});
