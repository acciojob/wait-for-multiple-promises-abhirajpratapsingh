function randomDelay() {
    return Math.random() * 2 + 1; 
}
const promise1 = new Promise(resolve => {
    const delay = randomDelay();
    setTimeout(() => resolve(delay), delay * 1000);
});
const promise2 = new Promise(resolve => {
    const delay = randomDelay();
    setTimeout(() => resolve(delay), delay * 1000);
});
const promise3 = new Promise(resolve => {
    const delay = randomDelay();
    setTimeout(() => resolve(delay), delay * 1000);
});
Promise.all([promise1, promise2, promise3])
    .then(results => {
        const totalTime = results.reduce((sum, time) => sum + time, 0).toFixed(3);
        document.getElementById('loading-row').remove();
        const tableBody = document.querySelector('#promise-table tbody');
        results.forEach((result, index) => {
            const row = document.createElement('tr');
            const promiseCell = document.createElement('td');
            const timeCell = document.createElement('td');
            promiseCell.textContent = `Promise ${index + 1}`;
            timeCell.textContent = result.toFixed(3);
            row.appendChild(promiseCell);
            row.appendChild(timeCell);
            tableBody.appendChild(row);
        });
        const totalRow = document.createElement('tr');
        const totalLabelCell = document.createElement('td');
        const totalTimeCell = document.createElement('td');
        totalLabelCell.textContent = 'Total';
        totalTimeCell.textContent = totalTime;
        totalRow.appendChild(totalLabelCell);
        totalRow.appendChild(totalTimeCell);
        tableBody.appendChild(totalRow);
    })
    .catch(error => {
        console.error('Error with one of the promises:', error);
    });
