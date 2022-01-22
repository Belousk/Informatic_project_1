let vis = document.getElementById('change_visible');
let label_vis = document.querySelector('#label_password>img');
console.log(label_vis)
vis.onchange = () => {
    if (vis.checked) {
        document.getElementById('password').type = 'text';
        console.log(label_vis.src);
        label_vis.src = './images/view.png';
    }else {
        document.getElementById('password').type = 'password';
        console.log(label_vis.src);
        label_vis.src = './images/hidden.png';
    }
};