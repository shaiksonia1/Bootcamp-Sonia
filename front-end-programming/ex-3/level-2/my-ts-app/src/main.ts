import { loadCSV } from './utils/loadData';
import { parseStudentData } from './utils/parseData';
import { renderGrid } from './utils/renderData';

// Set up the AG Grid
const gridOptions = {
  columnDefs: [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Grade', field: 'grade' },
  ],
  rowData: [],
};

// Initialize AG Grid
const gridDiv = document.getElementById('myGrid');
if (gridDiv) {
  new agGrid.Grid(gridDiv, gridOptions);
}

// Load and parse the CSV file
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.csv';
fileInput.addEventListener('change', async (e: any) => {
  const file = e.target.files[0];
  if (file) {
    try {
      const rawData = await loadCSV(file);
      const studentData = parseStudentData(rawData);
      renderGrid(gridOptions, studentData);
    } catch (error) {
      console.error('Error loading or parsing CSV:', error);
    }
  }
});

document.body.appendChild(fileInput);
