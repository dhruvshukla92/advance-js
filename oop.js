// // 'use strict'

class Person1{
	constructor(name, yob){
		this.name = name;
		this.yob = yob;	
	}
	calculateAge(){
		let date = new Date();
		console.log(date.getFullYear() - this.yob);
	}
}
class Person2 extends Person1{
	constructor(name, yob, city){
		super(name, yob);
		this.city = city;
	}
}

let tony1 = new Person2('tony1', 1978, 'noida');
let tony = new Person1('tony', 1978);
console.log("tony", tony1)
console.log(tony1.calculateAge());




function Person (name, yob){
	this.name = name;
	this.yob = yob;
	
}

Person.prototype.calculateAge = function (){
	let date = new Date();
	console.log(date.getFullYear() - this.yob);
}

let jack = new Person('jack', 1988);
let anything = new Person('any', 1981);

let sparrow = new Person('sparrow', 1992);


// console.log(jack.hasOwnProperty('calculateAge'));
// console.log(jack);


// let person = {
// 	name:'jack',
// 	yob:1988,
// 	calculateAge: function (){
// 		let date = new Date();
// 		console.log(date.getFullYear() - this.yob);
// 	}
// }
// console.log(person.calculateAge());





// // constructor function
// const Person = function(name, yearOfBirth){
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	// console.log(this);

// }

// let rajiv = new Person('Rajiv', 1990);
// let rohan = new Person('Rohan mehra', 1995);
// let pappu = new Person('Rahul', 1988);

// let anything = ['kuchbhi'];
// // console.log(rajiv instanceof Object);
// // console.log(pappu instanceof Person);
// // console.log( anything instanceof Array);
// // console.log( anything instanceof Object);

// //prototype methods
// Person.prototype.calculateAge = function (){
// 	let date = new Date();
// 	console.log(date.getFullYear() - this.yearOfBirth);
// }

// rajiv.calculateAge();
// rohan.calculateAge();
// pappu.calculateAge();
// //prototype properties

// Person.prototype.species = 'Human being';

// console.log(rajiv.species);
// // hasOwnProperty support
// console.log(rajiv.hasOwnProperty('name'));
// console.log(rajiv.hasOwnProperty('species'));


// let obj = {
// 	fname:'john',
// 	city:'uk',
// 	yob:1973,
// 	getDetails:function(){
// 		console.log(`${this.fname} lives in ${this.city}` )
// 	},
// 	calculateAge:()=>{
// 		let date = new Date();
// 		console.log(this);
// 		console.log(`${this.fname} age is ${date.getFullYear() - this.yob}`);
// 	}
// }

// obj.getDetails();
// obj.calculateAge();