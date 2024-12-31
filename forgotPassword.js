document.getElementById('forgot').addEventListener('click',function(e){
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    const errorMessage=document.getElementById('errorMessage');

    errorMessage.textContent=' ';

    if(password.length<6){
        errorMessage.textContent='Please fill the form must be greater than 6';
        e.preventDefault();
        return;
    }
    if(password !== confirmPassword){
        errorMessage.textContent='do not match your password';
        e.preventDefault();
        return;
    }
    window.location.href='login.html';
})