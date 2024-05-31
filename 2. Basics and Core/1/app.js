// Creating Vue instance
const app = Vue.createApp({
    // Object data
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Finish the course and touch some grass!",
            vueLink: "https://vuejs.org/guide/quick-start.html",
        }
    },
    methods: {
        outputGoal() {
            const num = Math.random();
            return num < 0.5 ? this.courseGoalA : this.courseGoalB;
        },
    }
})
// Mounting the instance on an element
app.mount('#user-goal');