const num = [1,2,3,4,5]
const squarenumber = num.map(function(value, index, array){
    // console.log(value, index, array);
    return value*value;
    });
console.log(squarenumber);
const cubenumber = num.map((value, index, array)=> value*value*value);
console.log(cubenumber);

const users = [{
    id: 1,
    name: 'Abilash',
},
{
    id: 2,
    name: 'Sisan',
},
];
users.map(function(value, index, array){
    console.log(value.id, value.name);
});
const color = ['red', 'green', 'blue'];
const a = color.map((value, index, array)=> `I like ${value} color`); 
console.log(a);