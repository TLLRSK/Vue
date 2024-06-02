const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newValue: "",
            listIsVisible: true,
        }
    },
    computed: {
        buttonContent() {
            if (this.listIsVisible) {
                return 'Hide';
            } else {
                return 'Show';
            }
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.newValue);
        },
        toggleList() {
            this.listIsVisible = !this.listIsVisible;
        }
    },
})

app.mount('#assignment');