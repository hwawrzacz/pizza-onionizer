<template src="./home-page.html" />
<script>
import CardsList from "../../components/cards-list/cards-list.vue";

export default {
  name: "HomePage",
    
  components: {
    CardsList
  },

  data: function () {
    return {
      isListEmpty: true,
      addCard: false
    }
  },

  methods: {
    onFirstCardAdded() {
      this.isListEmpty = false;
    },

    onLastCardDeleted() {
      this.isListEmpty = true;
    },

    addNewCard() {
      this.addCard = new Boolean(true);
    }
  }
}
</script>
<style lang="scss" scoped src="./home-page.scss"/>