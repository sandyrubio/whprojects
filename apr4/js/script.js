/*
function getUserName(){
    var username = prompt('What is your full name?').split(" ");
    outputUsername(username);
}

function outputUsername(nameArray){
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];
    for(var i = 0; i < nameArray.length; i++){
            if( i == 0 || i == nameArray.length - 1 ){
            console.log("we got the zeroth element!", nameArray[i]);
            document.getElementById('firstname').innerHTML += nameArray[i] + " ";
        //     }else{
        //     console.log("not the zeroth");
        // }
    }
}

getUserName();
*/

//arrays

// var stuff = ["jeep" , "subaru" , "honda"];
// console.log(stuff[1]);
// console.log(stuff.length);

// stuff.push("bmw");
// console.log(stuff);


// //pop method

// stuff.pop();
// console.log(stuff);

// var removedCar = stuff.pop();
// console.log(stuff);
// console.log(removedCar);

// //unshift method
// stuff.unshift("chevy", "chrysler");
// console.log(stuff);

// //shift method
// stuff.shift();
// console.log(stuff);

// //splice method 
// stuff.splice(1, 1, "red", "green");
// console.log(stuff);

// stuff.splice(1, 1, "grape" , "kiwi" , "apple", "carrot");
// console.log(stuff);

// stuff.splice(2,1);
// console.log(stuff);

// //slice method
// stuff.slice(4);
// var removed = stuff.slice(4,1);
// console.log(stuff);
// console.log(removed);

/*
beginning of instructions
// */

// var movies = ["die hard", "eternal sunshine of the spotless mind" , "donnie darko" , "deadpool" , "the breakfast club"];
// console.log(movies[]); 
// console.log(movies.length);

//his stuff

// function getUserAge(){
//     var userage = parseInt(prompt('how old are you?'));

// //     if(userage > 21){
//         console.log(userage);
//     }else if(userage == 21){
//         console.log('good to go');
//     }else{
//         console.log('plenty old');
//     }
// }

// getUserAge();

// /*
// ternary operator
// */
// function getAge(){
//     var age = parseInt(prompt('whats my age again?'));
//     (age >= "21") ? console.log('true') : console.log('false');

// }
// getAge();

//
 /*

instructions: 
- write a function and propt the user telling the user a 'story' asking for 
1 of 3 choices
-each choice continues to their own function
-wash rinse repeat thrice more

simple version: 
-alerts, prompts, confirms
-if / else if / else

complex version:
-loops
-arrays

*/

function getStory(){
    var story = prompt('You are in you house spending time with your family. YOur wicked uncle comes barging into the house informing you that the police has found his hideout where he stored all the art he has stolen. YOu tell him to get lost but he tells you that your whole family is involved since he used everyones personal information that inevitably leads to you. By the looks of it, there is not way to prove your familys innocence. Do you either run away, fight to prove your innocence or choose another opion not listed?');
    if(story == 'run away'){
        console.log(story);
    }else if (story == 'fight to prove your innocence'){
        console.log('good to go');
    }else{ (story == 'choose another option not listed')
        console.log('you die');
    }
}
getStory();