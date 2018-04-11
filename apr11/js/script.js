// this- context based. Look to the left of the dot.
var btns = document.querySelectorAll('button');

for(var i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        console.log(evt.target);
        console.log(this);
    });
}

window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        console.log(evt.target);
        console.log(this);
    }
});

var cars = ['jeep','honda','jeep', 'subaru'];
var types = ['string',true, 5, [1, 2, 3]];
// console.log(types[3][1]);
// console.log(cars);
// console.log(types);

//objects

var car = {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop','4 wheel drive']

};
// console.log(car.trim);

var sandy = {
    firstname: 'Sandy',
    lastname: 'Rubio',
    age: 18,
    height: "5'4",
    hair: true,
    haircolor: 'brown',
    facialhair: false,
    facialhaircolor: false,
    greeting: function(msg){
        // console.log(this.firstname);
        // console.log(msg + this.firstname);
        // console.log(msg + "Sandy");
    }
}

var types = ['string',true, 5, [1,2,3], sandy];
// console.log(types);


sandy.middlename = 'april';
// console.log(sandy);

sandy.middlename = 'juliet';
sandy.greeting("hello");

sandy.firstname = "Heather";
sandy.greeting("I'm now ");

//capitalize first letter in constructor functions

function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        console.log(msg + this.firstname);
    };
}

var myDad = new Person('Jorge', 'Rubio', 49, 'hazel');
var myMom = new Person('Mary', 'Rubio', 48, 'brown');
var myBro = new Person('Jorge', 'Rubio', 23, 'brown');

myBro.greeting("Hello ");



var form = document.querySelector('form');
console.log(form.elements.value);
// for(var i = 0; i < form.elements.length; i++){
//     console.log(form.elements.value)
// };

var users = [];
// var user = 0;

function UserAcc(email, username, password){
    this.email = email;
    this.username = username;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push(new UserAcc(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value
    )
);
    console.log(users)
});
    // user++;

    // for(var i = 0; i < form.elements.length -1; i++){
    //     console.log(form.elements[i].value);
    // }
    // user[user] = new UserAcc();

