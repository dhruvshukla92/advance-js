// Api's
// Ajax, Promises, Async/Await
function renderCountry(data) {
	const html = `
	<div class='country'>
	<img src='${data.flags.png}' alt='ind' class='country-flag' />
	<h2> ${data.name.common} </h2>
	<p> ${data.capital} </p>
	</div>
	`;

	let countries = document.getElementById('countries');
	countries.insertAdjacentHTML('beforeend', html);
}
// Async await
var url = 'https://restcountries.com/mne/mn';

 async function getData(){
	try{
	let res = await fetch(url);
	res = await res.json();
	// console.log(res);
	let [data] = res;
	renderCountry(data);
	 }
	 catch(err){
		 console.log(err);
	 }
	let [neighbour] = data.borders;
	let res1 = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
	res1 = await res1.json();
	console.log(res1);
	let [data1] = res1;
	renderCountry(data1);
 }

 getData();



// promises

// fetch(url)
// .then(function(res){
// 	return res.json();
// })
// .then(function (res){
// 	// console.log(res);
// 	let [data] = res;
// 	renderCountry(data);

// 	let [neighbour] = data.borders;
// 	return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
// })
// .then(function(res){
// 	return res.json();
// })
// .then(function (res){
// 	// console.log(res);
// 	let [data] = res;
// 	renderCountry(data);
// })



//ajax

// var url = 'https://restcountries.com/v3.1/name/india';

// let request = new XMLHttpRequest();
// request.open('GET', url);

// request.send();
// request.addEventListener('load',function (){
// 	let [data] = JSON.parse(request.responseText)
// 	// console.log(data);
// 	renderCountry(data);

// 	let [neighbour] = data.borders;
// 	let request2 = new XMLHttpRequest();
// 	request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}` )
// 	request2.send();

// 	request2.addEventListener('load',function (){
// 		let [data2] = JSON.parse(request2.responseText)
// 	console.log(data2);
// 	renderCountry(data2);
// 	})
// })



//Async await

// async function getCountryData (){
// 	let data;
// 	try{
// 	let res = await fetch('https://restcountries.com/v3.1/name/india');
// 	let countryData = await res.json();
// 	[data] = countryData;
// 	renderCountry(data);
// 	}
// 	catch(err){
// 		console.log('err: ', err);
// 	}


// 	let neighbour = data && data.borders && data.borders[0];
// 	if (!neighbour) return;
// 	let res1 = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)	
// 	let neighbourData = await res1.json();
// 	let [data1] = neighbourData;
// 	renderCountry(data1);
// }
// getCountryData();
// Promise

// fetch('https://restcountries.com/v3.1/name/india')
// .then((res)=>{
// 	return res.json()
// })
// .then(res =>{
// 	console.log(res);
// 	let [data] = res;
// 	renderCountry(data);
// 	let neighbour = data && data.borders && data.borders[0];
// 	if (!neighbour) return;

// 	return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)	
// })
// .then(res=> res.json())
// .then(res=>{
// 	console.log('res1: ',res);
// 	let [data] = res;
// 	renderCountry(data);
// })


//Ajax call

// let request = new XMLHttpRequest();

// request.open('GET', 'https://restcountries.com/v3.1/name/india');
// request.send();

// request.addEventListener('load', function () {
// 	let [data] = JSON.parse(request.responseText);
// 	console.log(data);
// 	renderCountry(data);

// 	//neighbour
// 	let neighbour = data && data.borders && data.borders[0];
// 	console.log("neighbour", neighbour);
// 	let request2 = new XMLHttpRequest();
// 	request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// 	request2.send();
// 	request2.addEventListener('load', function () {
// 		let [data1] = JSON.parse(request2.responseText);
// 		console.log('data1', data1);
// 		renderCountry(data1);
// 	})

// })


// let obj = {
// 	name:'john',
// 	age:39,
// 	city:'noida',
// 	country:'India',
// 	arr : [1, 34, 6, 8 ,90]
// }
// // let arr = [1, 34, 6, 8 ,90]

// // let [ , , , fourth] = arr;

// // console.log(fourth );

// let {name: fname, arr:[ , , , fourth]} = obj;
// // let [ , , , fourth] = arr;
// console.log(fname, fourth);
