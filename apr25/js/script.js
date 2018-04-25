var searchBox = document.querySelector('header input');
searchBox.addEventListener('keypress',getUserSearch);
//used up on top

//Used this
function getUserSearch(evt){
    if(
        evt.key !== 'undefined' &&
        evt.key !== 'Backspace' &&
        evt.key !== 'Tab'
    )
    userSearch += evt.key;

    getCharacter(userSearch);
}
// up to here

//used this
function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log('error:', req.statusText);
        }
    }
    req.send(null);
}
// up to here

var cardList = document.querySelector('main ul');

function cardListData(){
    console.log(cards);
    for(var i = 0; i < cards.result.length; i++){
        cardList.innerHTML = '';
        var card = `
        <li>
            <img src="${obj[i].image}" alt="${obj[i].name}">
            <h3>${obj[i].name}</h3>  
        </li>
        `;
        cardList.innerHTML += card;
    }
}


getReq('https://rickandmortyapi.com/api/charcter', cardListData);

function getCharacter(searchStr){
    var characterArr = [];


    var req = new XMLHttpRequest();
    req.open('Get','https://rickandmortyapi.com/api/charcter');
    req.onload = function(){
        if(req.readyState === 4 &&  req.status === 200){
            var obj = JSON.parse(req.responseText).results;
            for(var i = 0; i < obj.length; i++){
                // console.log(searchStr.lrngth, obj[i].name);
                // if(searchStr == obj[i].name)

                console.log(obj[i].name.includes(searchStr), obj[i].name);
                if(obj[i].name.includes(searchStr)){
                    cardList.innerHTML = ''
                }
            }




        }
    }
    req.send(null);
    console.log(characterArr);
}


