"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('data.json');
        const data = yield response.json();
        return data;
    });
}
function renderTable(data) {
    const table = document.getElementById('table');
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
function sortTable(columnIndex, data) {
    const sortedData = [...data]; // Create a shallow copy of the data to avoid mutating the original
    sortedData.sort((a, b) => {
        const aValue = Object.values(a)[columnIndex];
        const bValue = Object.values(b)[columnIndex];
        return typeof aValue === 'string' ? aValue.localeCompare(bValue) : aValue - bValue;
    });
    renderTable(sortedData); // Re-render the table with sorted data
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        renderTable(data); // Render the table when the data is fetched
    });
}
init();
