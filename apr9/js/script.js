// function welcomeMsg(str){
//     // console.log(str);
//     return "Welcome " + str;
// }
// // consoleInfo('Sandy');
// console.log( welcomeMsg('Sandy') );

// function calcNums(x, y){
//     // console.log(x + y);
//     return x + y;
// }

// console.log(calcNums(3, 2));
// var h3 = document.querySelector('h3');
// var user = document.querySelector('#use');
// function concatStrings(str1, str2){
//     return str1 + " " + str2;
// }

// function getFirstname(){
//     return prompt('What is your first name?');
// }

// function getLastname(){
//     return prompt('What is your last name?');
// }

// user.textContent = concatStrings( getFirstname(), getLastname() );
// html.innerHTML = concatStrings( getFirstname(), getLastname() );
// function welcomeUser(){
//     h3.innerHTML = concatStrings(getFirstname(), getLastname());
// }

// welcomeUser();

var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher','developer','plumber','cashier','busdriver'];
var plurals = ['fish','monkeys','shoes','cacti'];
var adj = ['hungry', 'livid', 'shiny', 'excited'];
var numbers = [5,8,28,888,937,66];

for(var i = 0; i < spans.length; i++){
var s = spans[i];
    switch(s.className){
        case 'occupation':
            setText(s, occupations);
            break;
        case 'plural':
            setText(s, plurals);
            break;
        case 'adj':
            setText(s, adj);
            break;
        case 'number':
            setText(s, numbers);
            break;
        default:

    }
}
function getRandNum(num){
    return Math.floor(Math.random() * num);
}
function setText(currSpan, textArray){
    return currSpan.textContent = testArray[getRandNum(testArray.length)];
}