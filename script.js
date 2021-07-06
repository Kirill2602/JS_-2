const basketBtn = document.querySelector('.cart-button');
const inBasket = document.querySelector('.inBasket');
let total = document.querySelector('.totalPrice');
const b = []
const totalPrice = 0;

document.addEventListener('click', e => {
    let find = b.find(i => i.id_product === +e.target.name);
    console.log(find);
    if (e.target.id === 'addGood' && find === undefined) {
        b.push(JSON.parse(e.target.value));
        const basket = new Basket(b, getTotalPrice(b))
        console.log(2, JSON.parse(e.target.value))
        basket.render()
    }
    if (e.target.id === 'plus') {
        console.log(666, e.target.value)
        console.log(667, b)
        let bItem = b.find(basketItem => basketItem.id_product === +e.target.value)
        bItem.quant = bItem.quant + 1;
        console.log(222, getTotalPrice(b))
        const basket = new Basket(b, getTotalPrice(b))
        basket.render()
    }
    if (e.target.id === 'minus') {
        let bItem = b.find(basketItem => basketItem.id_product === +e.target.value);
        if (bItem.quant !== 0) {
            bItem.quant = bItem.quant - 1;
        }
        if (bItem.quant <= 0 && bItem.id_product == e.target.value){
            console.log(999999,b);
            let index = b.findIndex(i => i.id_product == e.target.value);
            console.log(index);
            b.splice(index, index+1);
        }
        const basket = new Basket(b, getTotalPrice(b));
        basket.render();
    }
})


const getTotalPrice = (b) => {
    let totalPrice = 0;
    b.forEach(item => {
        totalPrice = totalPrice + item.price * item.quant;
    })
    return totalPrice;
}

let itemsInBasket = [];
inBasket.style.display = 'none';

function makeGETRequest(url) {
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return new Promise(function (resolve, reject) {
        xhr.open('GET', url, true);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}


class GoodsItem {
    constructor(product_name, price, id_product) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item">
<h3>Название: ${this.product_name}</h3>
<p>Цена: ${this.price} руб</p>
<h3>ID: ${this.id_product}</h3>
<button  id="addGood" value=${JSON.stringify({
            id_product: this.id_product,
            product_name: this.product_name,
            price: this.price,
            quant: 1
        })} class="addInBasket" name="${this.id_product}">В корзину</button>
</div>`;
    }
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`).then(e => {
            this.goods = JSON.parse(e.currentTarget.response)
            cb();
        });
    }

    render() {
        let listHtml = '';
        console.log("render = ", this.goods);
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class ItemInBasket extends GoodsItem {
    constructor(product_name, price, id_product, quant, totalPrice) {
        super(product_name, price, id_product);
        this.quant = quant;
        this.totalPrice = totalPrice;
    }

    render() {
        return `<div class="itemInBasket">
<h3>Название: ${this.product_name}</h3>
<p>Цена: ${this.price} руб</p>
<h3>ID: ${this.id_product}</h3>
<button id="plus" value=${this.id_product}>+</button>${this.quant}<button id="minus" value=${this.id_product}>-</button><div>Общая цена за товар: ${this.totalPrice} руб</div><hr>`;
    }
}


class Basket {
    constructor(cartGoods, totalPrice) {
        this.cartGoods = cartGoods || [];
        this.totalPrice = totalPrice
    }

    showBasket() {
        if (inBasket.style.display === 'none') {
            inBasket.style.display = 'flex';
        } else {
            inBasket.style.display = 'none';
        }
    }

    render() {
        let list = '';
        console.log("render = ", this.cartGoods);
        // создаёшь цену

        this.cartGoods.length && this.cartGoods.forEach((good, index) => {
            const goodItem = new ItemInBasket(good.product_name, good.price, good.id_product, good.quant, this.totalPrice);
            list += goodItem.render();
        });
        inBasket.innerHTML = list;
        inBasket.insertAdjacentHTML('beforeend', `<div class="totalPriceDiv">Сумма вашей корзины : ${this.totalPrice} руб</div>`);
    }
}

const list = new GoodsList();
const itemInbask = new ItemInBasket();
const basket = new Basket();
basketBtn.addEventListener('click', basket.showBasket);
list.fetchGoods(() => list.render());