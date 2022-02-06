//type 1 to define the function
function add(a, b) {
  return a + b;
} 
add(1, 2);  
console.log(add(2,3));


//type 2 to define the function
var add= function(a,b){
    return a+b;
}
console.log(add(1,3));

//arrow method to define the function
var myAddFxn = (a,b,c)=> a+b+c;
console.log(myAddFxn(1,2,3));

var helloFxn = ()=> "Hello ";
console.log(helloFxn());