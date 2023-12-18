document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('confirm-password');
    var text = document.getElementById('error');

    button.addEventListener('click', function() {
        // First check if either input is empty
        if (password.value.trim() === '' || passwordConfirm.value.trim() === '') {
            text.textContent = "Please enter password in both fields.";
            text.style.color = 'orange';
        } else if (password.value === passwordConfirm.value) {
            // Then check if the passwords match
            text.textContent = "Password matches!";
            text.style.color = 'green';
        } else {
            // If they are not empty and do not match
            text.textContent = "* Password does not match. Try again";
            text.style.color = 'red';
        }
    });
});
