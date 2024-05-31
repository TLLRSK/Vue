const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  // Computed methods will be reexecuted only if one of dependencies change
  // This is useful because using methods in a mounted element will reexecute every methods in the mounted element
  // when a dependency (like count) changes
  computed: {
    // Set the method as a property and not as method because the way we use it in html.
    fullname() {
      if (this.name === '' && this.lastName === '') {
        return ''
      } else {
        return this.name + ' ' + this.lastName;
      }
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
    }
  }
});

app.mount('#events');
