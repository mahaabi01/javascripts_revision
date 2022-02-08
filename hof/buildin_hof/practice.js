const employeeList = [{
    name: 'John',
    salary: 100000,
    age: 30,
    post: 'Manager',
},
{
    name: 'Suman',
    salary: 200000,
    age: 25,
    post: 'Developer',
},
{
    name: 'Sisan',
    salary: 300000,
    age: 27,
    post: 'Manager',
},
{
    name: 'Abilash',
    salary: 400000,
    age: 29,
    post: 'Developer',
}];

//map method_filter method, sort method
const sanitizedData = employeeList.map((employee) =>{
    return {name: employee.name, age: employee.age, post: employee.post};
}).filter((employee) => employee.age > 22 && employee.post === 'Developer')
.sort((a,b)=> (b.age - a.age));
console.log(sanitizedData);