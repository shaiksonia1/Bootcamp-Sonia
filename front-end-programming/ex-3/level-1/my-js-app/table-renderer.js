export function renderTable(students, highlightNewRow = false) {
    const tbody = document.querySelector('#student-table tbody');
    // Clear existing rows before rendering new ones
    tbody.innerHTML = '';
  
    students.forEach(student => {
      const tr = document.createElement('tr');
      tr.classList.add(highlightNewRow ? 'highlight' : ''); // Add highlight class if needed
      
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
      
      tbody.appendChild(tr);
    });
  }
  