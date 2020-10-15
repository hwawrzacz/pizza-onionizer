<template src="./label-editable.html" />

<script>
export default {
  name: "LabelEditable",
  props: {
    value: String,
    placeholder: String,
    label: String,
  },

  data: function () {
    return {
      editMode: !this.value,
    };
  },

  methods: {
    onValueChanged(event) {
      const newValue = event.target.value;
      if (newValue.trim().length) {
        this.emitValueChange(newValue);
        this.disableEditMode();
      }
    },
  
    enableEditMode(event) {
      this.editMode = true;
      event.target.previousSibling.focus();
    },

    disableEditMode() {
      this.editMode = false;
    },

    emitValueChange(value) {
      this.$emit("valueChange", value);
    },
  },
};
</script>

<style scoped  lang="scss" src="./label-editable.scss" />