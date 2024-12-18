// script.js

import { loadStudentCSV } from './data-loader.js';
import { renderStudentGrid } from './table-renderer.js';

document.getElementById('loadStudents').addEventListener('click', async () => {
    try {
        console.log('Load Students button clicked');
        const studentData = await loadStudentCSV('students.csv');
        renderStudentGrid(studentData);
    } catch (error) {
        console.error('Error loading students:', error);
    }
});

document.getElementById('changeFont').addEventListener('click', () => {
    document.body.style.fontFamily = "'Varela Round', sans-serif";
    console.log("Font changed to Varela Round");
});

