var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem("details")!== null){
    saveBtn.removeEventListener('click', getUserInfo);
    saveBtn.addEventListener('click', checkPassword);
}else{
    saveBtn.removeEventListener('click', checkPassword);
    saveBtn.addEventListener('click', getUserInfo);
}

function getUserInfo(evt){

    evt.preventDefault();

    var radio = document.querySelectorAll('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);

    localStorage.setItem("details", JSON.stringify(new UserInfo(username, password, radio)) );
}

function UserInfo(un,pw,theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){
    if(localStorage.getItem("details")!== null){
        document.querySelector('label[for="theme"]').style.display = 'none';


    var userInfo = JSON.parse(localStorage.getItem("details"));
    document.querySelector('input[type="text"]').value = userInfo.user;
    }
}
checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();
    var userName = document.querySelector('input[type="text"]').value;
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if( userName === userInfo.user && userPass === userInfo.pass){
        alert('Welcome home!');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('Please enter proper credentials');
    }
}