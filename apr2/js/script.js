// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast =document.querySelector('p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.fontSize = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);

// // pByClassname[0].style.fontSize = '32px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].style.color = 'yellow';
// console.log(pByTagname.length);

//for loop
// // for(var i = 0; i < 10; i++) {
// //     pByTagname[i].style.color = 'red';
// //     console.log(i);
// // }
// var myName = "Sandy";
// console.log(myName.length);
// for(var i = 0; i < myName.length; i++){
//     console.log(i);
//     console.log(myName[i]);
// }

// function getUsername(){
//     var username = prompt("your name");
//     console.log(username + 'from inside the function');

//     printUsername(username);
// }

// getUsername();
// function printUsername(x){
//     for(var i = 0; i < x.length; i++){
//         console.log(x[i]);
//     }
// }

// //get users two numbers
// function getUserNums(){
//     var num1 = prompt('please enter a number');
//     var num2 = prompt('please enter another number');
//     addUserNums(num1, num2);
// }

// //alert added numbers
// function addUserNums(x, y){
//     alert(parseInt(x) + parseInt(y));
// }
// getUserNums ();


// //my work
// function getUsercolors(){
//     var p1 = prompt('please type a color');
//     var p2 = prompt('please type another color');
//     var p3 = prompt('please type another color');
//     listUsercolors(p1 , p2 , p3);
// }
// function listUsercolors(color1, color2, color3){
//     console.log(arguments);
//     var color1 = document.querySelectorAll('.color');
//     for(var i = 0; i < color1.length; i++){
//         color1[i].style.color = arguments[i];
//     }
// }
// getUsercolors();


//matt's work
var paragrapghs = document.querrySelectorAll('p');

function getUserColors(){
    var userColors = prompt('pick some colors(comma separate)');
    var userTrimmedColors = [];
    for(var i = 0; i < userColors.length; i++){
        userTrimmedColors.push(userColors[i].trim()); 

    assignUserColors(userTrimmedColors);
}
function assignUserColors(x ,y ,z){
    for(var i = 0; i < x.length; i++){
        paragraphs[i].style.color = x[i];
    }
}

getUserColors();
