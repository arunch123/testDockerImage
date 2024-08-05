
const akobj1 = {
    firstName: 'arun',
    lastName : 'kumar',
    age : 39
};
const akobj2 = akobj1;
akobj2.age = 24;

console.log(`first: ` + akobj1);
console.log(`second: ` + akobj2);
