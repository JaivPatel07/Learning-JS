// =================================================================
// JavaScript Events
// =================================================================
// Events are actions or occurrences that happen in the browser, such as a user clicking a button, a page finishing loading, or a key being pressed.
// JavaScript allows us to "listen" for these events and execute code in response.

// =================================================================
// 1. `addEventListener()` - The Modern Way to Handle Events
// =================================================================
// This is the recommended method for registering an event handler.
// Syntax: element.addEventListener('eventName', callbackFunction, useCapture);
// - `eventName`: A string specifying the name of the event (e.g., 'click', 'mouseover').
// - `callbackFunction`: The function to run when the event occurs. This function automatically receives an `event` object as its first argument.
// - `useCapture`: An optional boolean. `false` (default) uses event bubbling. `true` uses event capturing. (More on this below).

// Example: Handling a button click
// HTML: <button id="myButton">Click Me</button>

// const myButton = document.querySelector('#myButton');
// myButton.addEventListener('click', function(event) {
//     console.log('Button was clicked!');
// });

// Note: It's generally not recommended to use the older `onclick` property (`myButton.onclick = ...`) because you can only assign one handler per event. `addEventListener` allows for multiple handlers.

// =================================================================
// 2. The `event` Object
// =================================================================
// When an event occurs, the browser creates an `event` object and passes it to the event handler function. This object contains useful information and methods.

// Key Properties and Methods:
// - `event.target`: The element that originally triggered the event.
// - `event.currentTarget`: The element the event listener is attached to (useful during bubbling).
// - `event.preventDefault()`: Stops the browser's default behavior for that event (e.g., stops a form from submitting or a link from navigating).
// - `event.stopPropagation()`: Stops the event from propagating further up or down the DOM tree (stops bubbling/capturing).
// - `event.type`: The type of event (e.g., 'click').
// - `event.timeStamp`: The time the event occurred.
// - `event.clientX`, `event.clientY`: The mouse coordinates relative to the visible part of the window.

// Example: Preventing a link from navigating
// HTML: <a id="myLink" href="https://www.google.com">Go to Google</a>

// const myLink = document.querySelector('#myLink');
// myLink.addEventListener('click', function(e) {
//     e.preventDefault(); // This line stops the browser from navigating to google.com
//     console.log('Link navigation was prevented.');
// });

// =================================================================
// 3. Event Propagation: Bubbling and Capturing
// =================================================================
// When an event happens on an element, it doesn't just happen on that one element. It goes through two phases:

// a) Capturing Phase (Trickle Down): The event starts from the root (`window`), then goes down through ancestors (`document`, `html`, `body`, etc.) to the target element.
// b) Bubbling Phase (Bubble Up): After reaching the target, the event travels back up from the target through its ancestors to the root (`window`).

// By default, all event listeners are registered for the **bubbling phase** (`useCapture: false`).

// Example: Visualizing Bubbling vs. Capturing
// HTML:
// <div id="grandparent">
//   <div id="parent">
//     <div id="child">Click Here</div>
//   </div>
// </div>

// const grandparent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// // Bubbling Listener (default)
// parent.addEventListener('click', () => {
//     console.log('Parent (Bubbling)');
// });

// // Capturing Listener
// grandparent.addEventListener('click', () => {
//     console.log('Grandparent (Capturing)');
// }, true); // Setting the third argument to `true` enables capturing.

// child.addEventListener('click', (e) => {
//     console.log('Child was clicked');
//     // e.stopPropagation(); // Uncomment this to stop the event from reaching the parent and grandparent.
// });

// If you click the child, the console output will be:
// 1. Grandparent (Capturing) - Capturing phase happens first (top-down).
// 2. Child was clicked - The event reaches the target.
// 3. Parent (Bubbling) - Bubbling phase happens last (bottom-up).

// =================================================================
// 4. Removing Event Listeners
// =================================================================
// To remove an event listener, you must use `removeEventListener` with the exact same arguments, which means you need a named function (not an anonymous one).

// const myButton = document.querySelector('#myButton');

// const handleClick = () => {
//     console.log('This will only run once!');
//     myButton.removeEventListener('click', handleClick); // Remove the listener after the first click.
// };

// myButton.addEventListener('click', handleClick);

// =================================================================
// 5. Common Event Types
// =================================================================
// - **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`
// - **Keyboard Events**: `keydown` (key is pressed down), `keyup` (key is released), `keypress` (character key is pressed)
// - **Form Events**: `submit` (form is submitted), `change` (value of an input, select, or textarea changes and loses focus), `input` (value changes, fires immediately), `focus` (element gets focus), `blur` (element loses focus)
// - **Window/Document Events**: `load` (page and all resources have finished loading), `DOMContentLoaded` (HTML document has been loaded and parsed, without waiting for stylesheets, images), `resize` (browser window is resized), `scroll` (document view is scrolled)

// Example: Listening for keyboard events
// HTML: <input type="text" id="key-input" placeholder="Type something...">

// const keyInput = document.querySelector('#key-input');
// keyInput.addEventListener('keydown', function(e) {
//     // e.key gives the character ('a', 'Enter', 'Shift')
//     // e.code gives the physical key code ('KeyA', 'Enter', 'ShiftLeft')
//     console.log(`Key pressed: ${e.key}, Code: ${e.code}`);

//     if (e.key === 'Enter') {
//         console.log('Enter key was pressed!');
//         e.preventDefault(); // Prevents default behavior, like submitting a form.
//     }
// });

// =================================================================
// 6. Event Delegation
// =================================================================
// This is a powerful pattern where you add a single event listener to a parent element instead of adding listeners to multiple child elements.
// It relies on event bubbling to work. When an event bubbles up from a child, the parent's listener can catch it and determine which child was the target.

// **Why use it?**
// 1. **Performance**: Fewer event listeners mean less memory usage. Very efficient for long lists.
// 2. **Dynamic Elements**: It works automatically for child elements that are added to the DOM *after* the listener has been set up.

// Example: Handling clicks on a list of items
// HTML:
// <ul id="item-list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// const itemList = document.querySelector('#item-list');

// itemList.addEventListener('click', function(e) {
//     // We check if the clicked element (`e.target`) is an `LI` element.
//     // `e.target` is the actual element that was clicked inside the `ul`.
//     if (e.target && e.target.nodeName === 'LI') {
//         console.log(`You clicked on: ${e.target.textContent}`);

//         // You could, for example, remove the item on click:
//         // e.target.remove();
//     }
// });