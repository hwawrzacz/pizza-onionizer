<template src="./App.html"/>

<script>
import CardDetails from "./components/card-details/CardDetails.vue";

export default {
  name: "App",
  components: {
    CardDetails,
  },

  data: function () {
    return {
      id: 0,
      cardsIds: [],
    };
  },

  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 73 && e.ctrlKey) {
        this.addNewCard();
      }
    });
  },

  methods: {
    addNewCard() {
      this.cardsIds.push(this.id++);
      setTimeout(() => {
        this.scrollDown();
      }, 300);
    },

    deleteCard(id) {
      this.cardsIds.splice(this.cardsIds.indexOf(id), 1);
    },

    scrollDown() {
      window.scrollBy(0, document.querySelector("#app").clientHeight);
    },
  },
};
</script>

<style lang="scss" src="./App.scss" />
