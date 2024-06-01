const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        
        boxSelected(box) {
            switch(box) {
                case 'A':
                    this.boxASelected
                        ? this.boxASelected = false
                        : this.boxASelected = true;
                    break;
                case 'B':
                    this.boxBSelected
                        ? this.boxBSelected = false
                        : this.boxBSelected = true;
                    break;
                case 'C':
                    this.boxCSelected
                        ? this.boxCSelected = false
                        : this.boxCSelected = true;
                    break;
                default:
                    break;
            }
        }
    },
})

app.mount("#styling");