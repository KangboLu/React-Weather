var names = ['A', 'B', 'C'];

// names.forEach(function(name) {
//     console.log('foreach', name);
// });

// names.forEach((name) => {
//     console.log('foreach', name);
//     }
// );

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Lu'))

// var person = {
//     name: 'Lu',
//     greet: function() {
//         names.forEach( (name) => {
//             console.log(this.name + ' say hi to ' + name)
//         })
//     }
// }

// person.greet();

// Challenge area
function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(1,2));
console.log(add(2,2));

var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));