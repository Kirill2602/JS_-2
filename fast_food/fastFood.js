'use strict';
let chck = document.querySelectorAll('input');
let calculationBtn = document.querySelector('.resultBtn');
let calorieInfo = document.querySelector('.calorie');
let priceInfo = document.querySelector('.price');
let arrInfo = {tp:0, tc:0};

class Burger {
    constructor(price, calorie) {
        this.price = price;
        this.calorie = calorie;
    }

    getChecked() {
        let calories = 0;
        let totalPrice = 0;
        chck.forEach(check => check.addEventListener('change', function (c) {
            if (c.target.checked) {
                totalPrice = totalPrice + parseInt(c.target.dataset.cost);
                calories = calories + parseInt(c.target.dataset.kkal);
                return arrInfo.tp = totalPrice, arrInfo.tc = calories;

            } else if (c.target.checked == false) {
                totalPrice = totalPrice - parseInt(c.target.dataset.cost);
                calories = calories - parseInt(c.target.dataset.kkal);
                return arrInfo.tp = totalPrice, arrInfo.tc = calories;
            }
        }));
    }
    getCalc(){
        priceInfo.innerHTML = arrInfo.tp + ' руб';
        calorieInfo.innerHTML = arrInfo.tc + ' ккал';
    }
}



const burger = new Burger();
burger.getChecked();
calculationBtn.addEventListener('click', burger.getCalc);


