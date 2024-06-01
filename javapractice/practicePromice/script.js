

const button = document.querySelector("#button");

function addEventListenerPromise(element, event) {
    return new Promise((resolve, reject) => {
        if (element && event) {
            element.addEventListener(event, resolve);
        } else {
            reject(new Error("Invalid element or event type"));
        }
    });
}

addEventListenerPromise(button, "click").then(e => {
    console.log("clicked");
    console.log(e);
}).catch(err => {
    console.error(err);
});
