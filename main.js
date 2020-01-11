Vue.component('bot', {
    template: `
    <div class ="bot">
        <div class="bot-image">
            <img v-bind:src="image">
        </div>

        <div class="bot-info">
            <h1>{{ title }}</h1>
            <p v-if="incompleteParts">Incomplete Bot</p>
            <p v-else>Bot Ready To Build</p>
            <p>{{ description }}</p>
            <a :href="link">Link</a>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants"
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="setBotImage(index)" >
            </div>

            <button @click="addToCart"
                :disabled="incompleteParts"
                :class="{ disabledButton: incompleteParts }">
                Add to Bot
            </button>

            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
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
        };
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
})

var app = new Vue({
    el: '#app',

});

var setDetails = function() {
    app._data.details = ["100 Power", "50 Weight", "30 Speed"];
}