var app = new Vue({
    el: '#app',
    data: {
        bot: 'Robot_#000',
        description: 'A humanoid machine',
        image: './assets/vueBot000.png',
        link: 'linkurl',
        incompleteParts: 10,
        details: ["100 Power", "50 Weight", "30 Speed"],
        variants: [
            {
                variantId: 000,
                variantColor: "blue",
                variantImage: './assets/vueBot000.png'
            },
            {
                variantId: 001,
                variantColor: "green",
                variantImage: './assets/vueBot001.png'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        setBotImage(variantImage) {
            this.image = variantImage;
        }
    }
});

var setDetails = function() {
    app._data.details = ["100 Power", "50 Weight", "30 Speed"];
}