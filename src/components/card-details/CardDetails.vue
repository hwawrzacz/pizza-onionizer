<template src="./CardDetails.html"/>

<script scoped>
import EditableLabel from "../label-editable/EditableLabel.vue";
export default {
  name: "CardDetails",
  props: ["idCard"],
  components: {
    EditableLabel,
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

<style scoped src="./CardDetails.css" />