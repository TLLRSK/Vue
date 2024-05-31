const app = Vue.createApp({
    data() {
        return {
            name: "Pedro",
            age: 36,
            imgUrl: "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4890896/ec9edbc671a44b69a69e5ec8b1e6400c/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.JPG?token-time=1718236800&token-hash=3nT8omWeqVBziEq6Z-AR9A7OoP9og0tMR0rQEhUUFA0%3D",
        }
    },
    methods: {
        ageSum() {
            const sum = 5;
            return this.age + sum; 
        },
        favNumber() {
            return Math.random().toFixed(2);
        }
    }
})

app.mount('#assignment');