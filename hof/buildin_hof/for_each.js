const fruits = ["Apple", "Banana", "Orange"];
// fruits.forEach((value, index, array)=> console.log(array));
fruits.forEach((a,b,c)=> console.log(b,a,c));

var doForEach = function(value, index, array){
    console.log(value,index, array);
};
fruits.forEach(doForEach);