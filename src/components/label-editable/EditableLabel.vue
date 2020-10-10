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
      console.log("onvaluechanged");
      const newValue = event.target.value;
      this.emitValueChange(newValue);
      this.disableEditMode();
    },

    enableEditMode(event) {
      console.log("edit enabled");
      this.editMode = true;
      event.target.previousSibling.focus();
    },

    disableEditMode() {
      console.log("edit disabled");
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
  width: 100%;
  padding: 8px 6px;

  color: inherit;
  font-size: 2em;
  font-weight: bold;
  border: none;
  text-align: center;
  cursor: text;
}
</style>