const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const uname = document.getElementById('uname');
const word = document.getElementById('word');

loginButton.addEventListener('click', () => {
    const user = username.value;
    const pass = password.value;
    if(user && pass){
        returnInfo(user, pass);
    }
});

function returnInfo(user, pass) {
    uname.textContent = user;
    word.textContent = pass;
}