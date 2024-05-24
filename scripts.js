// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('finance-form');
//     const recordsTableBody = document.querySelector('#records-table tbody');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const amount = document.getElementById('amount').value;
//         const type = document.getElementById('type').value;
//         const details = document.getElementById('details').value;
//         const date = new Date().toLocaleDateString();

//         // Create a new record
//         const record = {
//             type,
//             amount,
//             details,
//             date
//         };

//         // Save the record to local storage
//         saveRecord(record);

//         // Append the record to the table
//         appendRecordToTable(record);

//         // Clear the form
//         form.reset();
//     });

//     // Load existing records from local storage
//     loadRecords();

//     function saveRecord(record) {
//         const records = JSON.parse(localStorage.getItem('records')) || [];
//         records.push(record);
//         localStorage.setItem('records', JSON.stringify(records));
//     }

//     function loadRecords() {
//         const records = JSON.parse(localStorage.getItem('records')) || [];
//         records.forEach(record => appendRecordToTable(record));
//     }

//     function appendRecordToTable(record) {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${record.type}</td>
//             <td>${record.amount}</td>
//             <td>${record.details || ''}</td>
//             <td>${record.date}</td>
//         `;
//         recordsTableBody.appendChild(row);
//     }
// });








document.getElementById('financeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;
    const details = document.getElementById('details').value || 'N/A';
    const date = new Date().toLocaleString();

    // Create a new row
    const table = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    // Insert cells
    const amountCell = newRow.insertCell(0);
    const typeCell = newRow.insertCell(1);
    const detailsCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);
    
    // Append values to cells
    amountCell.textContent = amount;
    typeCell.textContent = type;
    detailsCell.textContent = details;
    dateCell.textContent = date;
    
    // Clear form
    document.getElementById('financeForm').reset();
});


