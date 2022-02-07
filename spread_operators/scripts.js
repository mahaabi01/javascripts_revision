/*var user = {
    id: 2,
    name: 'Abilash',
    profilePicture: 'https://github.com/mahaabi01',
};

var userExtraInfo = {
    location : 'Lalitpur',
    dob: '2002/08/23',
};
// var updatedUser = user;
var updatedUser = {...user, ...userExtraInfo, phone: "64646846", location: 'Ltp'};
// console.log(updatedUser);
console.log(updatedUser);

//array
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const extraPlanets = ['Sun', 'Pluto'];

// const allPlanets = [...planets, ...extraPlanets];
// console.log(allPlanets); 

const [aPlanet, ...allPlanets ] = planets;
console.log(aPlanet , allPlanets); 
*/
// function add(a,b){
//     return a + b;
// }
// console.log(add(1,2));

//using spread operator
function add2(a,b,...params){
    // console.log(params);
    var sum = a+b;
    for(let i=0; i<params.length; i++){
        sum = params[i] + sum;
    }
    return sum;
}
console.log(add2(1,2,3,4,5,6,7,8,9,10));

//spreading string
const message = 'Hello World';
console.log([...message]);
