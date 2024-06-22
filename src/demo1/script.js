document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    console.log("Hello from script.js");

    const output = fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            console.log('Inside then() ', response);
            return response.json()
        })
        .catch((error) => {
            console.log('Inside catch() ', error);
        })
        .finally(() => {
            console.log('Inside finally()');
        });

    console.log('Output from Fetch(): ', output, 'Type Of: ', typeof output, 'Promise: ', output instanceof Promise);

    output.then((data) => {
        console.log('Output Received', data);
        // document.getElementById('output').innerHTML = JSON.stringify(data);
        const name = document.querySelector('#name');
        name.textContent = data.name;
    });

});