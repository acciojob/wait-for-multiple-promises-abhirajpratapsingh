// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(promiseNumber) {
    return new Promise((resolve) => {
        const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ promiseNumber, time });
        }, time * 1000); // Convert to milliseconds
    });
}

// Create three promises
const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3),
];

// Get reference to the results body
const resultsBody = document.getElementById("results-body");

// Show loading message
resultsBody.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

// Use Promise.all to wait for all promises to resolve
Promise.all(promises).then((results) => {
    // Clear the loading message
    resultsBody.innerHTML = '';

    // Calculate total time
    const totalTime = results.reduce((acc, result) => acc + result.time, 0);

    // Populate the table with results
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time.toFixed(3)}</td>`;
        resultsBody.appendChild(row);
    });

    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    resultsBody.appendChild(totalRow);
});
