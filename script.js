const goods = [
    {title: 'Shirt', price: 150, img: 'itemsImg/1.jpg', id: 1},
     {title: 'Socks', price: 50, img: 'itemsImg/2.jpg', id: 2},
     {title: 'Jacket', price: 350, img:'itemsImg/3.jpg', id: 3},
     {title: 'Shoes', price: 250, img:'itemsImg/4.jpg', id: 4},
];

const renderGoodsItem = (title, price, img, id) => {
    return `<div class="goods-item"><h4>ID товара: ${id}</h4><h3 class="itemName">Название товара: ${title}</h3><img class="img" src=${img} alt="pic"><p class="price">Цена: ${price} рублей</p><button class="btn" type="submit">В корзину</button></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img, item.id));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
