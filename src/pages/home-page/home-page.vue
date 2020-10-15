<template src="./home-page.html" />
<script>
import CardsList from "../../components/cards-list/cards-list.vue";
import { EventBus, EventBusEvent } from "../../mixins/EventBus.js";

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

    emitAddNewCard() {
      EventBus.$emit(EventBusEvent.ADD_CARD);
    },

    emitSort() {
      EventBus.$emit(EventBusEvent.SORT_CARDS);
    }
  }
}
</script>
<style lang="scss" scoped src="./home-page.scss"/>