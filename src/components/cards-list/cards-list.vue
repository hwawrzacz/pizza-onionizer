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
      this.refreshMostProfitable();

      setTimeout(() => {
        this.scrollTop();
      }, 300);
    });
  },

  methods: {
    addNewCard() {
      const newCard = {
        id: this.id++,
        label: "",
        ratio: null,
        mostProfitable: false
      };           

      this.cards.push(newCard);

      if (this.cards.length === 1) {
        this.$emit('first-card-added');
      } else if (this.cards.length == 2) {
        this.$emit(EventBusEvent.FILTER_BREAKPOINT, true);
      }

      setTimeout(() => {
        this.scrollDown();
      }, 300);
    },

    deleteCard(id) {
      const cardToDelete = this.cards.find(card => card.id == id);
      this.cards.splice(this.cards.indexOf(cardToDelete), 1);

      if (this.cards.length === 0) {
        this.$emit('last-card-deleted');
      } else if (this.cards.length === 1) {
        this.$emit(EventBusEvent.FILTER_BREAKPOINT, false);
      }
    },

    sort() {
      this.cards = this.cards.sort((c1, c2) => (Number(c2.ratio) || 0) - (Number(c1.ratio) || 0));
    },

    refreshMostProfitable() {
      this.clearMostProfitableFlags();
      this.markMostProfitable();
    },
    
    clearMostProfitableFlags() {
      this.cards.forEach(card => card['mostProfitable'] = false);
    },

    markMostProfitable() {
      // As cards are already sorted, first card has the greatest value
      let max = this.cards[0].ratio;

      this.cards.forEach(card => {
        if (card.ratio == max) card.mostProfitable = true;
      })
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },

    scrollDown() {
      window.scrollTo(0, document.querySelector("#app").clientHeight);
    },

    onPropertyChange(id, event) {
      const { name, value } = event;
      this.cards.find(card => card.id == id)[name] = value;
    },
  },
}
</script>

<style lang="scss" scoped src="./cards-list.scss" />