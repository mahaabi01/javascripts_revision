// const numbers = [2,3,4];
// const filteredNumber = numbers.filter((value, index, array)=>value <= 3 );
    // if (value <= 3){
    //     return true;
    // }
    // else return false;
    // console.log(value, index, array);
    //using terniary operator 
// console.log(filteredNumber);

const user = [{
    name : "Abilash",
    age : 19,
},
{
    name : "Sisan",
    age : 20,
},
{
    name : "Suman",
    age : 17,
}];
const illigibleVoters = user.filter((value, index, array)=> value.age >= 18);
console.log(illigibleVoters);
