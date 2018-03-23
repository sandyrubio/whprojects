// function firstUser(){
//     var name = prompt("What's your name?");
// }


//Variables 

var firstnav = document.getElementById('nav');
var button1 = document.getElementById('first');
var button2 = document.getElementById('second');
var button3 = document.getElementById('third');
var button4 = document.getElementById('fourth');
var button5 = document.getElementById('fifth');
var firsth1 = document.getElementById('h1');
var paragraph1 = document.getElementById('lorem');
var firstAtag = document.getElementById('firstA');
var secondAtag = document.getElementById('secondA')

//End Variables

//Event Listeners

button2.addEventListener('click', bigText);

//Functions

function changeBackground(){
    document.body.style.backgroundColor = 'grey';
}
changeBackground();

function firstUser(){
    var name = prompt("What's your name?");

    // alert(name);
    document.getElementById('h1').innerHTML = name;
}

function bigText(){
    firsth1.style.color = 'pink';
    firsth1.style.fontSize = '72px';
}
