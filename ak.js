
const akobj1 = {
    firstName: 'arun',
    lastName : 'kumar',
    age : 35
};
const akobj2 = akobj1;
akobj2.age = 21;

console.log(`first: ` + akobj1);
console.log(`second: ` + akobj2);
