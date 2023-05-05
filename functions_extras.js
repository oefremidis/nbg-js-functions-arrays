// fuction declaration
// function foo(a, b){
//     return a + b;
// }

// console.log(foo(5, 3));

//-----------------------------------
// Fucntion are first class citizen

//------------------------
// assigned to a variable

// const bar = function (a, b){
//     return a + b;
// }

// fat arrow
// const bar = (a, b) => a + b;

// console.log(bar);
// console.log(bar(5, 3));

//------------------------
// Higer Order Functions

// passed as parameters... 

// function foo(x){
//     console.log(x);
// }

// function bar(funct) {
//     console.log(funct);
//     funct('Hello World');
// }

// bar(foo);

// or
// function foo(x){
//     console.log(x);
// }

// function bar(funct) {  // callback

//     // after 5 weeks
//     funct();
// }

// // const f = function(){
// //     foo('hello World');
// // }
// // bar(f);

// bar(function(){ 
//     foo('Hello World!'); 
// });

// bar(function(){ 
//     let y = 10;
//     console.log(y ** 5)
// });


//------------------------
// returned by a function
// function foo() {

//     function bar() {
//         return 1;
//     }
//     return bar
// }

// console.log(foo())
// const b = foo();
// console.log(b());


//------------------------
// Closures: counter retained after
// its environment dies

const withoutClosure = () => {
    let counter = 0;
    return ++counter;
}

console.log(withoutClosure());
console.log(withoutClosure());
console.log(withoutClosure());


const withClosure = () => {
    let counter = 10;
    return () => ++counter;
}

const increment = withClosure();
console.log(increment);
// console.log(withClosure());

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());