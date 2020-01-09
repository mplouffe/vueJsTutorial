var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Bot',
        bot: 'Robot_#000',
        description: 'A humanoid machine',
        selectedVariant: 0,
        link: 'linkurl',
        details: ["100 Power", "50 Weight", "30 Speed"],
        variants: [
            {
                variantId: 000,
                variantColor: "blue",
                variantImage: './assets/vueBot000.png',
                missingParts: 10
            },
            {
                variantId: 001,
                variantColor: "green",
                variantImage: './assets/vueBot001.png',
                missingParts: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        setBotImage(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.bot;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        incompleteParts() {
            return this.variants[this.selectedVariant].missingParts <= 0;
        }
    }
});

var setDetails = function() {
    app._data.details = ["100 Power", "50 Weight", "30 Speed"];
}