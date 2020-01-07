var app = new Vue({
    el: '#app',
    data: {
        bot: 'Robot_#000',
        description: 'A humanoid machine',
        image: './assets/vueBot.png',
        link: 'linkurl',
        incompleteParts: 10,
        details: ["100 Power", "50 Weight", "30 Speed"],
        variants: [
            {
                variantId: 000,
                variantColor: "blue"
            },
            {
                variantId: 001,
                variantColor: "green"
            }
        ]
    }
});

var setDetails = function() {
    app._data.details = ["100 Power", "50 Weight", "30 Speed"];
}