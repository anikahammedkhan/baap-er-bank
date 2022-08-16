/*
Login Section JavaScript
*/

document.getElementById('login').addEventListener('click', function () {
    let loginEmail = document.getElementById('email');
    let loginEmailValue = loginEmail.value;
    let loginPassword = document.getElementById('password');
    let loginPasswordvalue = loginPassword.value;
    if (loginEmailValue === 'anikkhan1105@gmail.com' && loginPasswordvalue === 'anik1105') {
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Input Valid User Email Or Password');
    }
})