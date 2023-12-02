const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      isDark: true,
      a: "#434c5c",
      b: "white",
    };
  },
  methods: {
    changeTheme() {
      this.isDark = !this.isDark;
      let newA = this.a;
      this.a = this.b;
      this.b = newA;
    },
  },
});
app.mount("#app");
