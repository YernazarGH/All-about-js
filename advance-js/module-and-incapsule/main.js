let user = (function() {
    let private = function() {
        console.log('private')
    }
    let say = function() {
        console.log('hello')
    }

    return {
        say: function() {
            console.log('Hi!');
        },
        sayHello: say,
        private: private
    }
}())

console.log(user);
console.log(user.say());
console.log(user.sayHello());
console.log(user.private());

let number = 6;
(function() {
    let number = 2;
    console.log(number);
    
}())
console.log(number);
