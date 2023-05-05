// // 'use strict' 
// it makes "global" this undefined

// console.log(this);
// console.log(this === window);

// function foo(){
//     console.log(this);
// }

// foo();

// function outer() {
//     // 'use strict'  // same here for functions
//     console.log(this);

//     function inner(){
//         console.log(this);
//     }

//     inner();
// }

// outer();

// this to the object that calls the method
let color = {
    colorName: 'Red',
    // getColor: function(){}
    getColor() {
        console.log(this);
        
        function foo(){
            console.log(this);
        }

        foo();  // but not here

        return this.colorName;
    }
}

color.getColor();