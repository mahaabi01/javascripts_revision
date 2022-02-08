const numbers = [12,5,24,32,15,12];
// console.log(numbers.sort());

//function overloading and function overriding
/*function overloading
function add(a,b){
    return a+b;
}
function add(a,b,c){
    return a+b+c;
}
*/
// const a = numbers.sort(function(a,b){
//     if (a>b){
//         return 1;
//     }
//     else return -1;
// });
// console.log(a);
const num = numbers.sort(function(a,b){
    return a-b;
});
console.log(num);