<template src="./CardDetails.html"/>

<script scoped>
import LabelEditable from "../label-editable/LabelEditable.vue";
export default {
  name: "CardDetails",
  props: {
    idCard: Number
  },

  components: {
    LabelEditable,
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

<style scoped lang="scss" src="./CardDetails.scss" />