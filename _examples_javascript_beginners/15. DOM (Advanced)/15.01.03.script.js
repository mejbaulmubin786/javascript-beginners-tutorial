// Select the <ul> element
let ulElement = document.querySelector("ul");

// Create a new <li> element
let newListItem = document.createElement("li");

// Add text to the new <li> element
newListItem.textContent =
  "The DOM tree serves as a foundational structure that JavaScript can traverse and modify, enabling developers to construct intricate and dynamic web pages.(This is the new replaced item.)";

// Select the child element to be replaced
let itemToReplace = ulElement.children[3]; // Replacing the 4th item (index starts at 0)

// Replace the old item with the new one
ulElement.replaceChild(newListItem, itemToReplace);
