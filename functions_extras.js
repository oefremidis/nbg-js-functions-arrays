// fuction declaration
// function foo(a, b){
//     return a + b;
// }

// console.log(foo(5, 3));

// Fucntion are first class citizen

// const bar = function (a, b){
//     return a + b;
// }

// fat arrow
// const bar = (a, b) => a + b;

// console.log(bar);
// console.log(bar(5, 3));

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

// function bar(funct) {

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

function foo() {

    function bar() {
        return 1;
    }
    return bar
}

console.log(foo())
const b = foo();
console.log(b());
