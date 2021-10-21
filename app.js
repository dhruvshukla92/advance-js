
let btnDemo = document.querySelector('.btn-demo')
let buttons = document.querySelectorAll('button');
console.log(buttons);

let btns = document.getElementsByTagName('button');
console.log(btns);

let demo = document.getElementById('demo');
console.log(demo);
let home = document.querySelector('.home');

//style
btnDemo.style.backgroundColor = 'yellow';
btnDemo.style.border= '1px solid blue';
btnDemo.style.borderRadius=' 20px'

console.log(btnDemo.style.backgroundColor)
console.log(getComputedStyle(btnDemo).height);
btnDemo.style.height = parseInt( getComputedStyle(btnDemo).height) + 20+ 'px';

//Attributes
home.setAttribute('target', '_blank');
console.log(home.href)
console.log(home.getAttribute('href'));

console.log(btnDemo.getAttribute('class'));
console.log(btnDemo.getAttribute('style'));
console.log(btnDemo.classList);

btnDemo.classList.add('new-class', 'to-remove');
setTimeout(() => {
	btnDemo.classList.remove('to-remove');
	
}, 3000);

