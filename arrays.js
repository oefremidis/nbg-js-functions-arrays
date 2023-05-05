// create an emtpy array
// var color = [];
// console.log(color);

// declare and assign values
// const colors = ['RED', 'Green', 'Blue'];


// // console.log(color[0]);
// // console.log(color[5]);
// colors[0] = 'Red';
// colors[7] = 'Magenta';

// // for(let i = 0; i < colors.length; i++){
// //     console.log(colors[i])
// // }

// // for(var value of colors){
// //     console.log(value)
// // }

// // for(var value in colors){
// //     console.log(value)
// // }

// //placed last
// colors.push('Yellow');

// // remove last
// colors.pop();
// // console.log(colors.pop())

// // placed first
// colors.unshift('Cyan');

// // remove first
// // console.log(colors.shift())

// // delete array elements
// colors.splice(1, 1);

// console.log(colors);

// -------------- ES6 (ES 2015) -----------------

// const colors = ['RED', 'Green', 'Blue'];
// const moreColors = colors;

// colors[0] = 'Red';
// // moreColors[0] = 'Red';


// console.log(colors);
// console.log(moreColors);

// spread operator

// const numbers = [1, 2, 3, 4];
// const letters = ['a', 'b', 'c'];

// const together = [...numbers, ...letters]

// // const nums = numbers;
// // nums[0] = 10;
// // console.log(nums);

// // hard copy
// const numsCopy = [...numbers];
// numsCopy[0] = 10;
// console.log(numsCopy);

// console.log(numbers);
// console.log(letters);
// console.log(together);

// // destructing operation
// const words = ['Hello', 'World'];
// // let x = words[0];
// // let y = words[1];
// const [x, y] = words;
// console.log(x,y);


// // destruction on objects
// car = {
//     brand: 'audi',
//     doors: 4,
//     plate: 'YIN2433'
// };

// const { brand, doors } = car

// ------------ Functional Programming -------------

const colors = ['Red', 'Green', 'Blue'];

// for(var value in colors){
//     console.log(value)
// }

// colors.forEach(
//     function (value) { console.log(value); }
// );

// colors.forEach( value => console.log(value));
// colors.forEach( (value, index) => console.log(index + ' --> ' + value));

// const filtered = colors.filter( (value) => value == 'Red');
// console.log(filtered);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const greaterThanFive = numbers.filter((num) => num > 5);
// console.log(greaterThanFive)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers
    .filter((num) => num > 5)
    .forEach(value => console.log(value));