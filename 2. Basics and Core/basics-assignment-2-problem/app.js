const app = Vue.createApp({
    data() {
        return {
            name: "",
            confirmedName: "",
            alertMessage: "ALERT",
        }
    },
    methods: {
        showAlert() {
            return alert(this.alertMessage);
        },
        setName(event) {
            this.name = event.target.value;
        },
        confirmName(event) {
            this.name = event.target.value;
        },
    }
})

app.mount('#assignment')