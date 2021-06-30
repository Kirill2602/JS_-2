const basketBtn = document.querySelector('.cart-button');
const inBasket = document.querySelector('.inBasket');
inBasket.style.display = 'none';


class GoodsItem {
    constructor(title, price, img, id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
    }

    render() {
        return `<div class="goods-item"> <h4>ID товара: ${this.id} </h4> <h3 class="itemName"> Название товара: ${this.title} </h3>
 <img class="img" src = ${this.img} alt="pic"> <p class="price"> Цена: ${this.price} $ </p> 
 <button class="btn" type="submit"> В корзину </button> </div>`;

    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150, img: 'itemsImg/1.jpg', id: 1},
            {title: 'Socks', price: 50, img: 'itemsImg/2.jpg', id: 2},
            {title: 'Jacket', price: 350, img: 'itemsImg/3.jpg', id: 3},
            {title: 'Shoes', price: 250, img: 'itemsImg/4.jpg', id: 4},
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img, good.id);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    calcTotalPrice(){
       let totalPrice = 0;
       this.goods.forEach((good)=> {
           if(good.price !== undefined){
               totalPrice += good.price;
           }
       });
    document.querySelector('.totalPrice').innerHTML = totalPrice;
    }
}


class ItemsInBasket {
    constructor(id, name, img, price, quantity, totalPrise) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
        this.totalPrise = totalPrise;
    }
    render(){
        `<div class="inBasket"><h5>ID товара: ${this.id}</h5><h4>Название товара: ${this.name}</h4>
<img src="${this.img}" alt="pic">Цена товара: ${this.price} <h3>Кол-во товара: ${this.quantity}</h3></div>`;
    }

}

class Basket{
    constructor() {
    }
    showBasket(){
        if (inBasket.style.display == 'none') {
            inBasket.style.display = 'block';
        } else {
            inBasket.style.display = 'none';
        }

    }

}
let bask = new Basket();
basketBtn.addEventListener('click', bask.showBasket);

const list = new GoodsList();
list.fetchGoods();
list.render();

