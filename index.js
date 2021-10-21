let arr = [54,2,7,1,3,32,15];

let [first, , jamesBond, ...others] = arr;
console.log("first , jamesBond, others", first, jamesBond, others);

const obj = {
	name: 'Joe',
	food: 'cake',
	age: 22
  };

let {age, name, food} = obj;
console.log("age", age, name, food)

// let newArr = arr.map(item=>{
// 	if (item >18) {
// 		return item;
// 	}
// });
// let newArr = arr.map(item=> item >18 ? item : null);
// let newArr = arr.map(item=> item >18);
// let newArr = arr.filter(item=> item >18);
// let newArr1 = arr.filter(item=>{
// 	if (item >18) {
		
// 	}
// });
// let rValue = arr.reduce((cv, val)=> cv + val, 1);
// console.log("rValue", rValue)


// console.log("newArr", newArr);









// let a ={
// 	one: {
// 		two: {
// 			three: 'hello'
// 		}
// 	}
// }

// function getFinalValue (key){
// 	if(key){
// 		for(let objKey in a){
// 			console.log(key, objKey);
// 			if (objKey == key) {
// 				console.log(a[objKey]);
// 				return;
// 			}else if (typeof a[objKey] == 'Object' && typeof a[objKey] != null && !Array.isArray(a[objKey]) ) {
// 				getFinalValue(a[objKey])
// 			}else{
// 				console.log(a[objKey]);
// 				return;
// 			}

// 		}

// 	}else{
// 		for(let objKey in a){
// 			if (typeof a[objKey] == 'Object' && typeof a[objKey] != null && !Array.isArray(a[objKey]) ) {
// 				getFinalValue(a[objKey])
// 			}else{
// 				console.log(a[objKey]);
// 			}

// 		}
// 	}
// }
// getFinalValue('three');

// function getName(name, year, cb) {
// 	let date = new Date();
// 	console.log(date.getFullYear());
// 	let age = date.getFullYear() - year;
// 	console.log(`Name is: ${name} and age is ${age}`);
// 	cb(age);
// }

// function executionDone(age) {
// 	if (age > 18 ) {
// 		console.log('congratulatiions u have been registered!!');
// 		return;
// 	}
// 	console.log('sorry , you r not allowed for registration!!');
// }

// getName('puju', 2005, executionDone);
