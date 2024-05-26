function validate_password() {
    let pass = document.getElementById('pass').value;
    let confirmPass = document.getElementById('confirmPass').value;
    let wrongPass = document.getElementById('wrongPass')

    if (pass !== confirmPass) {
        wrongPass.style.cssText='color: red; font-size: 10px;';
        wrongPass.innerText = '* Password Not Matching';
    }
    else {
        wrongPass.style.cssText='color: green; font-size: 10px;';
        wrongPass.innerText = '* Password Matching';
    }

}