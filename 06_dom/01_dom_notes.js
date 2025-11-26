// =================================================================
// Introduction to the DOM (Document Object Model)
// =================================================================
// The DOM represents your HTML document as a tree-like structure of objects.
// JavaScript can interact with this tree to change the document's structure, style, and content.
// Essentially, everything you see on a webpage (elements, attributes, text) can be manipulated with JavaScript via the DOM.


// =================================================================
// 1. Selecting Elements (Getting a reference to an HTML element)
// =================================================================

// --- Get Element by ID ---
// The fastest and most reliable way to select a single, unique element.
// In your HTML: <div id="main-title">Hello</div>
const title = document.getElementById('main-title');

// --- Get Elements by Class Name ---
// Selects a collection of elements that share a class. Returns an HTMLCollection (array-like).
// In your HTML: <p class="info-text">...</p> <p class="info-text">...</p>
const paragraphs = document.getElementsByClassName('info-text');

// --- Get Elements by Tag Name ---
// Selects a collection of elements with a specific HTML tag. Returns an HTMLCollection.
// In your HTML: <li>Item 1</li> <li>Item 2</li>
const listItems = document.getElementsByTagName('li');

// --- querySelector (Modern & Versatile) ---
// Selects the *first* element that matches a CSS selector. You can use any CSS selector (id, class, tag, attribute, etc.).
const firstParagraph = document.querySelector('.info-text'); // Selects by class
const mainTitle = document.querySelector('#main-title');   // Selects by ID
const firstListItem = document.querySelector('li');        // Selects by tag

// --- querySelectorAll (Modern & Versatile) ---
// Selects *all* elements that match a CSS selector. Returns a NodeList (array-like).
const allListItems = document.querySelectorAll('li');


// =================================================================
// 2. Manipulating Element Properties
// =================================================================

// --- Changing Content ---
// `textContent`: Gets or sets the text content of an element. It returns plain text, ignoring any HTML tags. (Generally safer and faster).
// `innerHTML`: Gets or sets the HTML content within an element. Use this if you need to add HTML tags. (Be careful with user input to avoid security risks like XSS).
// `innerText`: Similar to textContent, but is "style-aware" (e.g., it won't show text from a hidden element).

// Example:
// if (title) {
//     title.textContent = "New Title Text!"; // Changes the text
//     const container = document.querySelector('.container');
//     container.innerHTML = '<h2>This is a new header</h2>'; // Replaces content with new HTML
// }

// --- Changing Attributes ---
// `getAttribute('attrName')`: Gets the value of an attribute.
// `setAttribute('attrName', 'value')`: Sets the value of an attribute.
// `removeAttribute('attrName')`: Removes an attribute.

// Example:
// const link = document.querySelector('a');
// if (link) {
//     link.setAttribute('href', 'https://www.new-link.com');
//     link.setAttribute('target', '_blank'); // Make it open in a new tab
// }

// --- Changing Styles ---
// Access the `style` property of an element. CSS properties are written in camelCase (e.g., `backgroundColor`).
// Example:
// if (title) {
//     title.style.color = 'blue';
//     title.style.backgroundColor = '#f0f0f0';
//     title.style.padding = '10px';
// }


// =================================================================
// 3. Creating and Adding Elements to the DOM
// =================================================================

// --- `createElement()` ---
// Creates a new HTML element.
const newParagraph = document.createElement('p');

// --- Add content to the new element ---
newParagraph.textContent = "This is a brand new paragraph created with JavaScript.";

// --- `appendChild()` ---
// Adds the new element as the *last child* of a parent element.
// Example:
// const container = document.querySelector('.container');
// if (container) {
//     container.appendChild(newParagraph);
// }


// =================================================================
// 4. Handling Events (Making pages interactive)
// =================================================================

// --- `addEventListener()` ---
// The modern and recommended way to handle events. You can add multiple listeners for the same event.
// Syntax: element.addEventListener('eventName', callbackFunction);

// Example:
// const myButton = document.querySelector('#my-button');
// if (myButton) {
//     myButton.addEventListener('click', function(event) {
//         // The code inside this function runs when the button is clicked.
//         console.log('Button was clicked!');

//         // The 'event' object contains useful information about the event
//         console.log(event.target); // 'event.target' is the element that triggered the event (the button itself).

//         // event.preventDefault(); // Useful for stopping default browser actions, like a form submitting.
//     });
// }