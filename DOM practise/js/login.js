document.getElementById('submitbtn').addEventListener('click', function () {
    const email = document.getElementById('email-input');
    const emailValue = email.value;
    // console.log(emailValue);

    const password = document.getElementById('pass-input');
    const passValue = password.value;

    if (emailValue === 'sifaisal@gmail.com' && passValue === '786786' ){
        window.location.href = "bank.html";
}
    else {
        alert('plz input a valid emal & password');
    }
})