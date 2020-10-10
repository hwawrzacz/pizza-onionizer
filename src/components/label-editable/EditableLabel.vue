<template>
  <div class="editable-label-wrapper fx-col fx-h-center">
    <label for="price">{{ label }}</label>
    <input
      :class="{ disabled: !editMode }"
      :placeholder="placeholder"
      :value="value"
      @focusout="onValueChanged"
    />
    <span :class="{ disabled: editMode }" @click="enableEditMode">{{
      value
    }}</span>
  </div>
</template>

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

<style scoped>
.editable-label-wrapper {
  margin: 6px 8px;
}

.disabled {
  padding: 0;
  max-height: 0;
  opacity: 0;
  border: none;
}

input,
span {
  box-sizing: border-box;
  display: block;
  padding: 2px 6px;

  overflow: hidden;
  color: inherit;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  text-align: center;
  cursor: text;
}

span {
  margin: 0 6px;
  padding: 2px 0;
}
</style>