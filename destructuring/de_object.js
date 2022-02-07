var user = {
    id:1,
    name:'Abilash',
    interest: {
        sports: 'Cricket',
        music: 'Guitar',
        movies: 'Iron'
    },
    doSomething: function(){
        return "did something";
    },
    profilePicture: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4"
};
var id = user.id;
var profilePic= user.profilePicture;
console.log(user["profilePicture"]);
console.log(id);

// using destructuring
const {id, name} = user;
console.log(id);
console.log(name);
var {profilePicture} = user;
console.log(profilePicture);
const { location= 'ktm', id = 2 } = user;
console.log(location, id);

var {name: myName}= user;
console.log(myName);
var {interest: {sports}} = user;
console.log(sports);
console.log(user.doSomething());