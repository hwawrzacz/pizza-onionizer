<template>
  <div id="app">
    <CardNew v-on:add-card="addNewCard" />
  </div>
</template>

<script>
import CardNew from "./components/card-new/CardNew.vue";

export default {
  name: "App",
  components: {
    CardNew,
  },
  methods: {
    addNewCard: function () {
      console.log("new-card");
    },
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
