// =================================================================
// Introduction to APIs and Asynchronous JavaScript
// =================================================================
// API stands for Application Programming Interface. In web development, we often use APIs to fetch data from a server without needing to reload the page.
// These operations are "asynchronous," meaning your code doesn't wait for the request to finish before moving on. It sends the request and then handles the response whenever it arrives.

// =================================================================
// Method 1: XMLHttpRequest (XHR) - The Legacy Way
// =================================================================
// This was the original method for making asynchronous requests in the browser. While it's still supported, modern development almost always uses the `fetch` API instead.

const requestUrl = 'https://api.github.com/users/hiteshchoudhary';

// --- The `readyState` property ---
// This property tracks the state of the request.
// 0: UNSENT - Client has been created. open() not called yet.
// 1: OPENED - open() has been called.
// 2: HEADERS_RECEIVED - send() has been called, and headers and status are available.
// 3: LOADING - Downloading; responseText holds partial data.
// 4: DONE - The operation is complete.

// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl); // 1. Configure the request: method and URL.

// // 2. Set up a function to run whenever the `readyState` changes.
// xhr.onreadystatechange = function() {
//     console.log(xhr.readyState); // Log the state changes (will likely show 2, 3, and 4).

//     // 3. Check if the request is complete (readyState === 4).
//     if (xhr.readyState === 4) {
//         // It's also good practice to check the status code (e.g., 200 for "OK").
//         if (xhr.status === 200) {
//             const data = JSON.parse(this.responseText); // Convert the JSON string response to a JavaScript object.
//             console.log("User Followers:", data.followers);
//         } else {
//             console.log("Error fetching data. Status:", xhr.status);
//         }
//     }
// }

// xhr.send(); // 4. Send the request.


// =================================================================
// Method 2: The `fetch` API - The Modern Standard
// =================================================================
// The `fetch` API is a modern, more powerful, and flexible replacement for XMLHttpRequest. It is based on Promises.

// A `Promise` is an object representing the eventual completion (or failure) of an asynchronous operation.

// fetch(requestUrl)
//     .then((response) => {
//         // The first `.then()` handles the initial response from the server.
//         // This response is not the actual JSON data yet, but an object with details about the response (like status, headers).
//         // We need to call `.json()` to parse the response body as JSON. This also returns a promise.
//         return response.json();
//     })
//     .then((data) => {
//         // The second `.then()` receives the actual data after it has been parsed.
//         console.log(data);
//         console.log("User Followers (from fetch):", data.followers);
//     })
//     .catch((error) => {
//         // The `.catch()` block will run if there is any network error during the fetch operation.
//         console.log("An error occurred:", error);
//     });


// =================================================================
// Method 3: `async/await` with `fetch` - Cleaner Syntax
// =================================================================
// `async/await` is modern syntax built on top of Promises that allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and debug.

// async function getUserData() {
//     try {
//         // The `await` keyword pauses the function execution until the Promise is resolved.
//         const response = await fetch(requestUrl);

//         // It's good practice to check if the response was successful.
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json(); // `await` also pauses here until the JSON is parsed.
//         console.log(data);
//         console.log("User Followers (from async/await):", data.followers);

//     } catch (error) {
//         // The `try...catch` block is used for error handling with async/await.
//         console.log("An error occurred in async function:", error);
//     }
// }

// getUserData();