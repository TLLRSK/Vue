const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      this.confirmedName = this.name;
    },
    add() {
      return this.counter++;
    },
    reduce() {
      return this.counter--;
    }
  }
});

app.mount('#events');
