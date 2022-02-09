function add(a,b,callback){
    setTimeout(()=> callback(a+b), 0);
    // console.log('from function !')
};
function result(sum){
    console.log("sum : " + sum);
}
console.log('Hello 1');
add(1,2, result);
console.log('Hello 2');