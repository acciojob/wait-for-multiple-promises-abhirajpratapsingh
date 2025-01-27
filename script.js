function createRandomPromise(promiseName) {
    const timeTaken = Math.random() * 2 + 1;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ promiseName, timeTaken });
        }, timeTaken * 1000);
    });
}

const promises = [
    createRandomPromise('Promise 1'),
    createRandomPromise('Promise 2'),
    createRandomPromise('Promise 3'),
];

Promise.all(promises)
    .then(results => {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';
        
        let totalTime = 0;
        
        results.forEach(result => {
            const row = document.createElement('tr');
            const promiseCell = document.createElement('td');
            promiseCell.textContent = result.promiseName;
            const timeCell = document.createElement('td');
            timeCell.textContent = result.timeTaken.toFixed(3);
            row.appendChild(promiseCell);
            row.appendChild(timeCell);
            tableBody.appendChild(row);
            totalTime += result.timeTaken;
        });

        const totalRow = document.createElement('tr');
        const totalLabel = document.createElement('td');
        totalLabel.textContent = 'Total';
        const totalCell = document.createElement('td');
        totalCell.textContent = totalTime.toFixed(3);
        totalRow.appendChild(totalLabel);
        totalRow.appendChild(totalCell);
        tableBody.appendChild(totalRow);
    })
    .catch(error => {
        console.error('Error:', error);
    });
