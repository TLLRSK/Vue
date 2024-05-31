const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // Computed methods will be reexecuted only if one of dependencies change
  // This is useful because using methods in a mounted element will reexecute every methods in the mounted element
  // when a dependency (like count) changes
  computed: {
    // Set the method as a property and not as method because the way we use it in html.
    fullname() {
      return this.name === ''
        ? ''
        : this.name + ' ' + 'García';
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
