function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://rickandmortyapi.com/api/charcter');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log('error:', req.statusText);
        }
    }
    /*req.send(null);*/
}
