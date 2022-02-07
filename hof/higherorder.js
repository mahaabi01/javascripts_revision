const numbers = [1,2,3,4];


// const doSquare =(numbers)=>{
//     var result=[];
//     for(let i =0 ; i<numbers.length; i++){
//         result.push(numbers[i]*numbers[i]);

//     }
//     return result;
// };
// console.log(doSquare(numbers));

// const doCube =(numbers)=>{
//     var result1=[];
//     for(let i =0 ; i<numbers.length; i++){
//         result1.push(numbers[i]*numbers[i]*numbers[i]);

//     }
//     return result1;
// };
// console.log(doCube(numbers));

// const doSquareroot =(numbers)=>{
//     var result2=[];
//     for(let i =0 ; i<numbers.length; i++){
//         result2.push(Math.sqrt(numbers[i]));
//     };
//     return result2;
// };
// console.log(doSquareroot(numbers));

const doCube =(a) => a * a * a;
const doSquareroot = (a) => Math.sqrt(a);
const doSquare =(a)=> a*a;

const calculate  = (numbers, logic) => {
    var result = [];
    for(let i = 0; i< numbers.length; i++){
        result.push(logic(numbers[i]));

    }
    return result;
};

console.log(calculate(numbers, doSquare))
console.log(calculate(numbers, doCube));
console.log(calculate(numbers,doSquareroot));
