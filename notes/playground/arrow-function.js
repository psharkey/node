var square = (x) => x * x;

console.log(square(5));

var user = {
    name: 'Me',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi I am ${this.name}`);
    }
}

//user.sayHi();
user.sayHiAlt(1, 2, 3)
