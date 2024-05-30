// Creating Vue instance
const app = Vue.createApp({
    // Object data
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
            vueLink: "https://vuejs.org/guide/quick-start.html",
        }
    },
    methods: {
        outputGoal() {
            const num = Math.random();
            return num < 0.5 ? "Learn Vue" : "Master Vue";
        },
    }
})
// Mounting the instance on an element
app.mount('#user-goal');