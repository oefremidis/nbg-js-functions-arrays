// // 'use strict'

// console.log(this);
// console.log(this === window);

// function foo(){
//     console.log(this);
// }

// foo();

// function outer() {
//     // 'use strict'
//     console.log(this);

//     function inner(){
//         console.log(this);
//     }

//     inner();
// }

// outer();

let color = {
    colorName: 'Red',
    // getColor: function(){}
    getColor() {
        console.log(this);
        
        function foo(){
            console.log(this);
        }

        foo();

        return this.colorName;
    }
}

color.getColor();