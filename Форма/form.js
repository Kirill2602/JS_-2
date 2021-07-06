'use strict';
let regName = /^[a-zA-Z]+$/;
let regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
let regMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;


const button = document.querySelector('button');

document.querySelector('input[name=button]').onclick = function(e) {
    e.preventDefault();
///////////////////////////////// ИМЯ
    let name = document.querySelector('.name').value;

    if (regName.test(name)) {
        console.log('Тут только буквы');
    } else if (name == ''){
        document.querySelector('.name').style.borderColor = 'red';
        alert(`Поле 'Имя' не может быть пустым!`);
    } else {
        document.querySelector('.name').style.borderColor = 'red';
       alert(`Поле 'Имя'должно содержать только буквы!`);
    }
///////////////////////////////////////ТЕЛЕФОН
    let phone = document.querySelector('.phone').value;

    if (regPhone.test(phone)){
        console.log('Номер введен верно!')
    } else if (phone == ''){
        document.querySelector('.phone').style.borderColor = 'red';
        alert(`Поле "Телефон" не может быть пустым!!!`);
    } else {
        document.querySelector('.phone').style.borderColor = 'red';
        alert(`Номер телефона введен не верно!!!`)
    }

    /////////////////////////////E-MAIL
    let mail = document.querySelector('.mail').value;
    if (regMail.test(mail)){
        console.log('e-mail введен верно!')
    } else if (mail == ''){
        document.querySelector('.mail').style.borderColor = 'red';
        alert('Поле "E-mail" не может быть пустым!!!');
    } else {
        document.querySelector('.mail').style.borderColor = 'red';
        alert(`Не корректно заполнено поле E-mail!!!`)
    }

    /////////////////////////////////////////////ТЕКСТ
    let text = document.querySelector('.text').value;

    if (text == ''){
        document.querySelector('.text').style.borderColor = 'red';
        alert('Поле "Текст" не может быть пустым!!!')
    } else {
        console.log('Поле заполненно корректно');
    }

}