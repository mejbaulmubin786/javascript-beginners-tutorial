// Select the <ul> element
let ulElement = document.querySelector("ul");

// Create a new <li> element
let newParagraph = document.createElement("li");

// Add text content to the new <li> element
newParagraph.innerText =
  "The DOM tree serves as a foundational structure that JavaScript can traverse and modify, enabling developers to construct intricate and dynamic web pages. (This is a dynamically created li element).";

// Append the new <li> to the <ul>
ulElement.appendChild(newParagraph);

// Create a new <span> element
let newSpan = document.createElement("span");

// Add text content to the <span> element
newSpan.innerText = " (Appended using a span element)";

// Append the <span> to the newly created <li>
newParagraph.appendChild(newSpan);
