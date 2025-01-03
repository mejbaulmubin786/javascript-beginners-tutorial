// Select the second <ul>
let secondUl = document.querySelectorAll("ul")[1]; // 0-based index, so 1 means the second <ul>

// Add a class to the first <ul>
secondUl.classList.add("second-ul-class");

// Select all <li> children of the second <ul>
let liElements = secondUl.querySelectorAll("li");

// Add a class to each <li> of the second <ul>
liElements.forEach((li, index) => {
  li.classList.add(`second-ul-li-${index + 1}`);
});
