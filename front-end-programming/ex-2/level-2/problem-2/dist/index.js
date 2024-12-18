var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Papa from 'papaparse';
// Fetch CSV data using PapaParse
function loadCSVData(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (result) => {
                if (result.errors.length > 0) {
                    reject(result.errors);
                }
                else {
                    resolve(result.data);
                }
            }
        });
    });
}
// Render table with filtering and row highlighting
function renderTableWithFilter(data, filter) {
    const headers = ['Name', 'Age', 'City'];
    let tableHTML = '<table border="1"><thead><tr>';
    // Table headers with filtering options
    headers.forEach(header => {
        tableHTML += `<th><input type="text" placeholder="Filter ${header}" onkeyup="filterColumn(event, '${header}')">${header}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';
    // Table rows with row highlighting
    data.forEach(row => {
        const highlightClass = row.name.toLowerCase().includes(filter.toLowerCase()) ? 'highlight' : '';
        tableHTML += `<tr class="${highlightClass}">
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.city}</td>
    </tr>`;
    });
    tableHTML += '</tbody></table>';
    return tableHTML;
}
// Filter column by value
function filterColumn(event, column) {
    const input = event.target;
    const filterValue = input.value.toLowerCase();
    const rows = document.querySelectorAll('tr');
    const headers = ['Name', 'Age', 'City']; // Declare headers here to make it accessible
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        if (cells.length > 0) {
            const cellIndex = headers.indexOf(column);
            if (cellIndex !== -1) {
                const cellValue = cells[cellIndex].textContent || '';
                if (cellValue.toLowerCase().includes(filterValue)) {
                    row.style.display = '';
                }
                else {
                    row.style.display = 'none';
                }
            }
        }
    });
}
// Row highlighting based on name match
function highlightRow(data) {
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.classList.add('highlight');
        });
        row.addEventListener('mouseout', () => {
            row.classList.remove('highlight');
        });
    });
}
// Main function to load CSV data and display table
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield loadCSVData('data.csv'); // Replace with your CSV file path
        document.body.innerHTML = renderTableWithFilter(data, '');
        highlightRow(data);
    });
}
main();
