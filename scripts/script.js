let viewCheckbox = document.getElementById('change_visible')
viewCheckbox.onchange = function (){
    if (viewCheckbox.checked){
        document.getElementById('password').type = 'text';
        document.querySelector('#label_password>img').src = './images/view.png';
    }else {
        document.getElementById('password').type = 'password';
        document.querySelector('#label_password>img').src = './images/hidden.png';
    }
}