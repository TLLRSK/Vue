const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      console.log("entered Goal", this.enteredGoalValue);
      console.log("Goals", this.goals);
    }
  }
});

app.mount('#user-goals');
