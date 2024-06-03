const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted");
  }
});

setTimeout(() => {
  app.unmount();
}, 4000);

app.mount('#app');
