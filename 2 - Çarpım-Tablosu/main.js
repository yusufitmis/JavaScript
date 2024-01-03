const btn = document.querySelector('.btn');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let sonuc = document.getElementById('sonuc');

btn.addEventListener('click', function () {
    sonuc.innerHTML = ' ';
    const num = document.querySelector('input').value;
    numbers.forEach(function (item) {
        let islem = item + ' X ' + num + ' = '
        sonuc.innerHTML += '<p> '+ islem + (item * num) + '</p>';
    });
});
