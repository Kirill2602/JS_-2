let buttons = document.getElementsByName('add');
let spanQ = document.querySelector('.spanQt');
let basket = document.querySelector('.cartIcon');
let divInBasket = document.querySelector('.inBasket');
divInBasket.style.display = 'none';
let itemsInBasket = [];
const productArr = [
    {
        id: 1,
        name: 'Product1',
        price: '$52',
        itemSrc: 'images/featured/1.jpg',
    },
    {
        id: 2,
        name: "Product2",
        price: '$50',
        itemSrc: 'images/featured/2.jpg',
    },
    {
        id: 3,
        name: "Product3",
        price: '$25',
        itemSrc: 'images/featured/3.jpg',
    },
    {
        id: 4,
        name: "Product4",
        price: '$42',
        itemSrc: 'images/featured/4.jpg',
    },
    {
        id: 5,
        name: "Product5",
        price: '$102',
        itemSrc: 'images/featured/5.jpg',
    },
    {
        id: 6,
        name: "Product6",
        price: '$72',
        itemSrc: 'images/featured/6.jpg',
    },
];

buttons.forEach(function (i) {
    i.addEventListener('click', clickHandler);
});

function clickHandler(event) {
    const itemId = +event.target.dataset.prod;
    spanQ.textContent = parseInt(spanQ.textContent) + 1;
    const item = productArr.length && productArr.find(product => product.id === itemId);
    const itemInBasket = itemsInBasket.length && itemsInBasket.find(item => item.id === itemId);
    if (itemInBasket) {
        itemInBasket.quantity = itemInBasket.quantity + 1;
    } else {
        item.quantity = 1;
        itemsInBasket.push(item);

    }
    let basket = document.querySelector('.inBasket');
    basket.innerHTML = '<div></div>'
    showCat();
}

function showCat() {
    let totalItemPrice = 0;
    itemsInBasket.forEach(function (itemPrice) {
        let pricePerNumber = itemPrice.price.toString().slice(1);
        totalItemPrice = totalItemPrice + itemPrice.quantity * pricePerNumber;
    });

    itemsInBasket.forEach(function (i) {
        getProdMark(i, totalItemPrice);
    });
    divInBasket.insertAdjacentHTML('afterbegin', `<div class="totalPriceItm">Общая сумма вашей корзины: $${totalItemPrice}<div/><hr>`);
}

basket.addEventListener('click', showCart);


function getProdMark(i, productV) {
    divInBasket.insertAdjacentHTML('afterbegin', `<div>id товара: ${i.id}</div><div>Цена товара: ${i.price}</div>
 <div>Название товара: ${i.name}</div><div>Кол-во товара ${i.quantity}</div><img class="miniBasketPic" src="${i.itemSrc}" alt="pic">
 <hr>`);
}


function showCart() {
    if (divInBasket.style.display == 'none') {
        divInBasket.style.display = 'block';
    } else {
        divInBasket.style.display = 'none';
    }
}

