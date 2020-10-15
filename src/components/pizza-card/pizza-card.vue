<template src="./pizza-card.html"/>

<script scoped>
import LabelEditable from "../label-editable/label-editable.vue";
export default {
  name: "PizzaCard",
  props: {
    idCard: Number
  },

  components: {
    LabelEditable
  },

  data: function () {
    return {
      label: "",
      price: null,
      diameter: null,
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

    getRatio() {
      const ratio = (Math.PI * Math.pow(this.diameter / 2, 2)) / this.price;
      return ratio ? ratio.toFixed(2) : "---";
    },

    onDeleteCard() {
      this.close = true;
      setTimeout(this.emitDeleteCard, 300);
    },

    emitDeleteCard() {
      this.$emit("deleteCard", this.idCard);
    },
  },
};
</script>

<style scoped lang="scss" src="./pizza-card.scss" />