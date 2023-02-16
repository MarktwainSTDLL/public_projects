let viewPass = document.getElementById('eye');
let inputPwd = document.getElementById('viewPwd');

viewPass.addEventListener('click', viewPassword);

function viewPassword() {

    viewPass.classList.toggle("fa-eye");
    viewPass.classList.toggle("active");

    (inputPwd.type == 'password') ? inputPwd.type = 'text' : inputPwd.type = 'password';
}