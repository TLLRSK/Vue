const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            backgroundColor: '',
            isVisible: true,
        }
    },
    computed: {
        classes(userClass,isVislble) {
            return {
                visible: this.isVisible,
                hidden: !this.isVisible,
                [this.userClass]: true,
            };
        },
        background(backgroundColor) {
            return {
                backgroundColor: this.backgroundColor,
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.isVisible = !this.isVisible;
        },
    }
})

app.mount('#assignment');