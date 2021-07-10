//console.clear();
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        searchLine: '',
        isVisibleCart: true,
        cartGoods: [],
    },
    mounted() {
        return new Promise(resolve => {
            fetch(`${API_URL}/catalogData.json`)
                .then(response => response.json())
                .then(json => {
                    this.goods = json;
                })
        })
    },
    methods: {
        remove() {
            this.cartGoods = [];
        },
        addInBasket(good) {
            if (!this.cartGoods.some((gd) => {
                if (gd.id_product === good.id_product) {
                    gd.amount++;
                    return true;
                }
            })) {
                this.cartGoods.push({...good, amount: 1});
                console.log(this.cartGoods);
            }
        },
        delItemBasket(idx) {
            this.cartGoods[idx].amount--;
            if (this.cartGoods[idx].amount === 0) {
                this.cartGoods.splice(idx, 1);
            }
        }
    },

    computed: {
        filteredGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            return this.goods.filter((good) => good.product_name.match(regexp));
        },
        count() {
            return this.cartGoods.reduce((sum, good) => sum + good.amount, 0);
        },
        basketSum() {
            return this.cartGoods.reduce((sum, good) => sum + good.amount * good.price, 0);
        },
    },
});
