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
            this.confirmedName = event.target.value;
        },
        resetName() {
            this.name = '';
        },
    }
})

app.mount('#assignment')