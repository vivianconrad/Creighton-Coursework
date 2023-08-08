// Add your JavaScript code here

// Example: Add interactivity to a button
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Example: Fetch data from an API and display it
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const dataContainer = document.querySelector('#dataContainer');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dataContainer.textContent = `Title: ${data.title}\n\n${data.body}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        dataContainer.textContent = 'An error occurred while fetching data.';
    });
