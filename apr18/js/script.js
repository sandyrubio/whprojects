// var paras = document.querySelectorAll('p');

// // paras.classList.contains('classname');

// ! == not
/*
for(var i = 0; i < paras.length; i++){
    // console.log(paras[i].classList.contains('para'));
    if(!paras[i].classList.contains('para')){
        console.log('thats true');
    }else{
//         console.log('thats not true');
//     }
// }
// */

// console.log(3 === '3');

// console.log(typeof(3));
// console.log(typeof('3'));

// // == lose comparison
// // === script comparison

// var usernum = parseInt(prompt('pick a number'));

// if(!usernum){
//     console.log(3 + usernum);
// }else{
//     console.log('please enter something');
// }
var weatherKey = '903c8840e69e4884f6f9075f213fd58d';
var myUl = document. querySelector('ul');

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET','http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=903c8840e69e4884f6f9075f213fd58d');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
    for(var i = 0; i< data.list.length; i++){
        // console.log(data).list;
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay;
        var myLi = `
        <li>
            <p>${timeOfDay}</p>
        </li>
        `;
        myUl.innerHTML += myLi;
    }
}

