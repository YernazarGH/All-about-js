// incapsule

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.getAge = function() { //getter
        return userAge;
    }

    this.setAge = function(age) { //setter
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        }else{
            console.log('Недопустимый возраст');
        };
    }
}
let ivan = new User('Ivan', 20);
console.log(ivan.name);
console.log(ivan.age);
console.log(ivan.getAge());
ivan.setAge(50);
console.log(ivan.getAge());

//module
(function() {
    let a = 5;
    console.log(a);
}())