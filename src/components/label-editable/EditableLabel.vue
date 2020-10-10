<template>
  <div class="editable-label-wrapper fx-col fx-h-center">
    <label for="price">{{ label }}</label>
    <input
      :class="{ disabled: !editMode }"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @focusout="onValueChanged"
    />
    <span :class="{ disabled: editMode }" @dblclick="enableEditMode">{{
      value
    }}</span>
  </div>
</template>

<script>
export default {
  name: "EditableLabel",
  props: ["type", "value", "placeholder", "label"],

  data: function () {
    return {
      editMode: !this.value,
    };
  },

  methods: {
    onValueChanged(event) {
      console.log("onvaluechanged");
      this.emitValueChange(event.target.value);
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
}

input,
span {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 8px 6px;

  text-align: center;
  font-size: 1em;
}

/* Disable number input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>