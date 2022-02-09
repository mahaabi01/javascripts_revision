// console.log("A");
// setTimeout(() => console.log("I am Abilash."), 2000);
// console.log("B");
// console.log("C");

const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2000);
};

console.log('Hello World !');

networkRequest();
console.log('The End');