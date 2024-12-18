
let fontApplied = false; // Track font toggle state
let studentCount = 0; // Track number of students added

// Add Student Button Functionality
document.getElementById('addStudent').addEventListener('click', () => {
    const tableBody = document.querySelector('#studentTable tbody');

    // Prompt user for student details
    const id = ++studentCount;
    const name = prompt("Enter student's name:", "John Doe") || "John Doe";
    const age = parseInt(prompt("Enter student's age:", "18"), 10) || 18;
    const grade = prompt("Enter student's grade:", "A") || "A";

    // Create a new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
    `;

    // Add the highlight class
    newRow.classList.add('highlight');

    // Append the new row to the table body
    tableBody.appendChild(newRow);
});

// Toggle Font Button Functionality
document.getElementById('changeFont').addEventListener('click', () => {
    const table = document.getElementById('studentTable');

    if (!fontApplied) {
        // Load Google Font dynamically if not already loaded
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Apply the font to the table
        table.style.fontFamily = 'Roboto, sans-serif';
    } else {
        // Revert to default font
        table.style.fontFamily = 'Arial, sans-serif';
    }

    // Toggle font state
    fontApplied = !fontApplied;
});

// Display Browser Information
const browserInfo = document.getElementById('browserInfo');
browserInfo.innerHTML = `
    <strong>Browser Information:</strong><br>
    Browser: ${navigator.appName}<br>
    Version: ${navigator.appVersion}<br>
    Window Dimensions: ${window.innerWidth} x ${window.innerHeight}<br>
`;
