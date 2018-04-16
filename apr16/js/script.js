var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());

console.log(theDate.toLocaleString());

var myBday = new Date(2000, 10, 02);

var dateStr = `
    Today's date os the ${theDate.getDate()}th of ${theDate.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
`;

//do this ->mm/dd/yy
var bDayStr = `
${myBday.toLocaleString('en-us', {month: '2-digit'})}
${myBday.toLocaleString('en-us', {year: '2-digit'})}
`;

var theTime = new Date();
var timeStr = `
${theTime.toLocaleString('en-us',{hour: 'numeric', hour12: false,minute:'2-digit',second:'2-digit'})}
`;
// hh:mm:ss




var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click',function(){
    clearInterval(myTimer);
});

//setInterval Function

function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false,minute:'2-digit',second:'2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}

//setTimeout Function
var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg(){
    document.body.classList.add('hilite');
}

function runTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('')}
    `;
}


