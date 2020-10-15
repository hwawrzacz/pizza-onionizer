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
      localPrice: this.price,
      localDiameter: this.diameter,
    };
  },

  methods: {
    emitLabelChange(value) {
      this.emitPropChange('label', value);
    },

    emitRatioChange() {
      this.emitPropChange('ratio', this.ratio);
    },

    emitPropChange(propName, propValue) {
      this.$emit('propertyChange', {name: propName, value: propValue});
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
      const ratio = (Math.PI * Math.pow(this.localDiameter / 2, 2)) / this.localPrice;
      return ratio ? ratio.toFixed(2) : "---";
    }
  }
};
</script>

<style scoped lang="scss" src="./pizza-card.scss" />