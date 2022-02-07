const fruits = ["Banana", "Orange", "Apple", "Mango"];
const user = {
    id: 1,
    firstName: "Abilash",
    lastName: "Mahajan",
}
// for (let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

//😫😫😫😪😪😪
// for of gives the value of the array
// for (let i of fruits){
//     console.log(i);
// }

//for in gives the index or key
// for (let i in fruits){
//     console.log(i, fruits[i]); 
// }

// for (let i in user){
//     console.log(i);
//     console.log(user[i]);
// };
// for (let i of user){
//     console.log(i);
// }
// c = Object.keys(user);
// console.log(Object.entries(user));

// console.log(c)

for (let [key, value] of Object.entries(user)){
    console.log(key +":" + value);
}

//day 17 32 minutes
vf