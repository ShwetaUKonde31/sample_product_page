<template>
  <ProductDetails msg="Welcome to Your Vue.js App" />
</template>

<script>
import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  components: {
    ProductDetails,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
