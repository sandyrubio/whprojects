function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&access_token=$client_Id=GL4DwrCg6SUHJox5zjVf9DwYg3DYNF_j`, );
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab'
    // )
    // str += evt.key;

    // console.log(str.searchBox.value);
}