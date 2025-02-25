const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(!email.checkValidity()){
        alert(email.title);
        e.preventDefault();
        return;
    }
    if(!password.checkValidity()){
        alert(password.title);
        e.preventDefault();
        return;
    }
    alert("Login Successful");

});