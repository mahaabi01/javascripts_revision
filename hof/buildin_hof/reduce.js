//the reduce method reduce our given array into a single value
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce(function(previous, current, currentindex, array){
//     console.log(previous, current, currentindex, array);
//     return previous + current;
//     //returned value will be previous element of array
// });
// console.log(sum);

// const numbers1 = [1,2,3,4,5];
// const multiplication = numbers1.reduce((previous, current, currentindex, array)=>previous * current);
//     // console.log(previous, current, currentindex, array);
// console.log(multiplication);

// //to find the maximum value of an array 
// const arr = [41,52,62,34];
// const max = arr.reduce((previous, current)=> (previous > current) ? previous : current);
// console.log(max);

const employees = [
    {
        name: 'Abilash',
        salary : 100000,
    },
    {
        name: 'Sisan',
        salary : 200000,
    },
];
// const totalsalary = employees.reduce(previous, current, currentindex, array)=>{
//     return {salary : previous.salary + current.salary};
// } ;
// console.log(totalsalary);

const totalsalary = employees.reduce((previous, current)=>{
    return {salaary: previous.salary + current.salary};
});
console.log(totalsalary);

