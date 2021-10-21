let demo = document.getElementById('demo');
// console.log(demo);

let headings = document.getElementsByClassName('heading');
// console.log(headings);

let Allbtns = document.getElementsByTagName('button');
// console.log(Allbtns);

let heading1 = document.querySelector('.heading');
// console.log('heading1: ', heading1);

// let allPTag = document.querySelectorAll('p');
let queryAll = document.querySelectorAll('h3:not(.heading)');
// console.log("queryAll", queryAll)
let input = document.querySelector('input')
// console.log("input", input)
//modify Dom

heading1.style.color = 'red';
heading1.style.border = '1px solid blue';

heading1.innerHTML = 'Dom Manipulation';

// console.log(input.type);
// console.log(input.id);
// console.log(input.getAttribute('type'));
// console.log(input)
// input.name = 'lname';
input.setAttribute('name', 'firstName');
// console.log(input)

input.type = 'number'

console.log(heading1.className);
// console.log(heading1.style);
console.log(heading1.style.color);
console.log(heading1.style.height);
console.log(getComputedStyle(heading1).height);






