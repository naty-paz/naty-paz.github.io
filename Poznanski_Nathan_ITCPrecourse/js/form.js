loginForm.addEventListener('input', () => {
    if (firstname.value.length > 0 &&
        birthday.value.length > 0 &&
        email.value.length > 0 &&
        comments.value.length > 0){
        loginBtn.removeAttribute('disabled');
        } else {
            loginBtn.setAttribute('disabled', 'disabled');
        }
});