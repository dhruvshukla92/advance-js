// with setTimeout

// console.log(1)
// setTimeout(() => {console.log(2)}, 500)
// setTimeout(() => {console.log(3)})
// Promise.resolve(4).then((res)=>console.log(res))
// console.log(5)
// 	// 1, 5, 4, 3, 2


// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');  
//     setTimeout(f1, 5000);   
//     f2();
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log(4)
//     console.log(5)
//     console.log(5)
// }

// main();


// // with fetch Api

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    new Promise((resolve, reject) =>
        resolve('I am a promise')
    ).then(resolve => console.log(resolve))
    
    f2();
}
main();