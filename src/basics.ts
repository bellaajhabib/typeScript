const person: object={
    name:'Habib',
    age:30,
    role: [10,"admin"]
};
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
person["role"].push('s');
person["role"][1]=10;
console.log(this);