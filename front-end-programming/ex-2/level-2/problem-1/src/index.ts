interface Person {
    name: string;
    age: number;
    city: string;
  }
  
  async function fetchData(): Promise<Person[]> {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  }
  
  function renderTable(data: Person[]): void {
    const table = document.getElementById('table') as HTMLTableElement;
  
    // Clear existing table content
    table.innerHTML = '';
  
    // Create the table header
    const header = table.createTHead();
    const row = header.insertRow(0);
    const columns = ['Name', 'Age', 'City'];
  
    columns.forEach((col, index) => {
      const th = document.createElement('th');
      th.innerText = col;
      th.addEventListener('click', () => sortTable(index, data)); // Add sorting functionality on click
      row.appendChild(th);
    });
  
    // Create the table body
    const tbody = table.createTBody();
    data.forEach((person) => {
      const tr = tbody.insertRow();
      tr.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.city}</td>`;
    });
  }
  
  function sortTable(columnIndex: number, data: Person[]): void {
    const sortedData = [...data]; // Create a shallow copy of the data to avoid mutating the original
    sortedData.sort((a, b) => {
      const aValue = Object.values(a)[columnIndex];
      const bValue = Object.values(b)[columnIndex];
      return typeof aValue === 'string' ? aValue.localeCompare(bValue) : aValue - bValue;
    });
    renderTable(sortedData); // Re-render the table with sorted data
  }
  
  async function init() {
    const data = await fetchData();
    renderTable(data); // Render the table when the data is fetched
  }
  
  init();
  