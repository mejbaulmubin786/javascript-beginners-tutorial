// Select the element to be removed
let ulElement = document.querySelector("ul");

// Select the last child element of the <ul> and remove it
ulElement.removeChild(ulElement.lastElementChild);

// Select the first child element of the <ul> and remove it using the newer remove() method
ulElement.firstElementChild.remove();
