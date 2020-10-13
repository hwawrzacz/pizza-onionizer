<template src="./EditableLabel.html" />

<script>
export default {
  name: "EditableLabel",
  props: ["value", "placeholder", "label"],

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

<style scoped src="./EditableLabel.css" />