<template src="./cards-list.html" />

<script>
import PizzaCard from "../pizza-card/pizza-card.vue";
import { EventBus, EventBusEvent } from "../../mixins/EventBus.js";

export default {
  name: "CardsList",

  components: {
    PizzaCard,
  },
  
  props: {
    addCard: Boolean
  },
  
  data: function () {
    return {
      id: 0,
      cards: [],
    };
  },
  
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 73 && e.ctrlKey && !e.shiftKey) {
        this.addNewCard();
      }
    });
    
    EventBus.$on(EventBusEvent.ADD_CARD, () => {
      this.addNewCard();
    });

    EventBus.$on(EventBusEvent.SORT_CARDS, () => {
      this.sort();
    });

  },

  methods: {
    addNewCard() {
      const newCard = {
        id: this.id++,
        label: "",
        ratio: null
      };           

      this.cards.push(newCard);

      if (this.cards.length === 1) {
        this.$emit('first-card-added');
      }

      setTimeout(() => {
        this.scrollDown();
      }, 300);
    },

    onPropertyChange(id, event) {
      const { name, value } = event;
      this.cards.find(card => card.id == id)[name] = value;
    },

    deleteCard(id) {
      this.cards.splice(this.cards.indexOf(id), 1);
      if (this.cards.length === 0) {
        this.$emit('last-card-deleted');
      }
    },

    sort() {
      this.cards = this.cards.sort((c1, c2) => Number(c2.ratio) || 0 - Number(c1.ratio) || 0);
    },

    scrollDown() {
      window.scrollBy(0, document.querySelector("#app").clientHeight);
    },
  },
}
</script>

<style lang="scss" scoped src="./cards-list.scss" />