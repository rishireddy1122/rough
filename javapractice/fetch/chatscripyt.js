let url = "https://jsonplaceholder.typicode.com/posts";

// Fetch data using the Fetch API and handle it with promises
fetch(url).then(response => {
    // Convert the response to JSON format
    return response.json();
}).then(data => {
    // Map through the data to get user IDs
    const userIds = data.map(user => user.id);
    console.log(userIds);
}).catch(error => {
    console.error('Error fetching data:', error);
});

console.log("hi"); // This will log before the fetch completes due to asynchronous nature

// Fetch data using async/await
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.map(user => user.id));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();

// Post data to the given API
async function postData() {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "new title"
            })
        });
        const post = await response.json();
        console.log(post);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

postData();

// Event delegation to find the button clicked on certain elements
document.addEventListener("click", e => {
    console.log('document clicked');
});

document.body.addEventListener("click", e => {
    console.log('body clicked');
});

// Create and append a new button element
const newButton = document.createElement("button");
newButton.innerText = "button";
document.body.append(newButton);

// Add click event listener to the new button
newButton.addEventListener("click", e => {
    console.log('button clicked');
});
