<template src="./pizza-card.html"/>

<script scoped>
import LabelEditable from "../label-editable/label-editable.vue";
export default {
  name: "PizzaCard",

  props: {
    idCard: Number,
    label: String,
    price: Number,
    diameter: Number,
  },

  components: {
    LabelEditable
  },

  data () {
    return {
      close: false,
    };
  },

  methods: {
    setLabel(value) {
      this.label = value;
    },

    setPrice(value) {
      this.price = value;
    },

    setDiameter(value) {
      this.diameter = value;
    },
    
    onDeleteCard() {
      this.close = true;
      setTimeout(this.emitDeleteCard, 300);
    },

    emitDeleteCard() {
      this.$emit("deleteCard", this.idCard);
    },
  },

  computed: {
    ratio() {
      const ratio = (Math.PI * Math.pow(this.diameter / 2, 2)) / this.price;
      return ratio ? ratio.toFixed(2) : "---";
    }
  }
};
</script>

<style scoped lang="scss" src="./pizza-card.scss" />