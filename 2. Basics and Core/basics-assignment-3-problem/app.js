const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            maxCount: 37,
            message: {
                isLess: "Not there yet",
                isMore: "Too much!",
            }
        }
    },
    watch: {
        counter() {
            setTimeout(() => {
                this.counter = 0;
            }, 5000)
        }
    },
    computed: {
        result() {
            console.log(this.counter);
            if (this.counter < this.maxCount) {
                return this.message.isLess;
            } else if (this.counter === this.maxCount) {
                return this.counter;
            } else if (this.counter > this.maxCount) {
                return this.message.isMore;
            };
            return;
        }
    },
    methods: {
        sum() {
            this.counter += 5;
        },
        reduce() {
            this.counter += 1;
        }
    },
})

app.mount('#assignment');