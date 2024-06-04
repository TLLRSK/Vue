const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ]
        }
    }
});

app.component('friend-contact', {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            }
        }
    },
    template: `
        <li>
            <h2>Manuel Lorenz</h2>
            <button @click="toggleDetails">
                {{detailsAreVisible ? "Hide" : "Show"}} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> 01234 5678 991</li>
                <li><strong>Email:</strong> manuel@localhost.com</li>
            </ul>
        </li>
    `,
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
})
app.mount('#app');