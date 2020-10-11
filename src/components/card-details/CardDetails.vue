<template>
  <div class="card" :class="{ 'animate-close': close }">
    <button class="close" @click="onDeleteCard">
      <i class="material-icons">close</i>
    </button>
    <section>
      <EditableLabel
        :type="'text'"
        :placeholder="'e.g. Margherita'"
        :value="label"
        @valueChange="setLabel"
      />
    </section>
    <section class="fx-row fx-h-between fx-v-center">
      <div class="input-wrapper fx-col fx-v-start">
        <label for="price">Price</label>
        <div class="fx-row fx-v-center">
          <input
            name="price"
            type="number"
            placeholder="e.g. 15"
            v-model="price"
            @valueChange="setPrice"
          />
          <i class="material-icons">monetization_on</i>
        </div>
      </div>

      <div class="input-wrapper fx-col fx-v-start">
        <label for="diameter">Diameter</label>
        <div class="fx-row fx-v-center">
          <input
            name="diameter"
            type="number"
            placeholder="e.g. 32"
            v-model="diameter"
            @valueChange="setDiameter"
          />
          <span>cm</span>
        </div>
      </div>
    </section>
    <section class="ratio-wrapper">
      <p>
        <span class="fx-row fx-h-center fx-v-center fx-grow-1">
          For 1 <i class="material-icons">monetization_on</i> you can get
        </span>
        <span class="fx-row fx-h-center fx-v-center">
          <span class="ratio">
            {{ getRatio() }} <small>cm<sup>2</sup></small>
          </span>
        </span>
        of your pizza.
      </p>
    </section>
  </div>
</template>

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

<style scoped>
.card {
  position: relative;
  padding: 8px;
  margin: 16px;
  height: 250px;

  overflow: hidden;
  border: 1px solid hsl(0, 0%, 80%);
  background-color: hsl(0, 0%, 95%);
  border-radius: 6px;
  cursor: initial;
  transition: 200ms;

  /* For animating purposes */
  width: 0;
  transform: scale(0.5);
  opacity: 0;

  animation: show;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
}

@keyframes show {
  0% {
    width: 0px;
    height: 0px;
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    width: 350px;
    height: 250px;
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    width: 350px;
    height: 250px;
    transform: scale(1);
    opacity: 1;
  }
}

.animate-close {
  animation: close;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
}

@keyframes close {
  0% {
    width: 350px;
    height: 250px;
    transform: scale(1);
    opacity: 1;
  }
  50% {
    width: 350px;
    height: 250px;
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    width: 0px;
    height: 0px;
    margin: 0;
    padding: 0;
    border: 0;
    transform: scale(0.5);
    opacity: 0;
  }
}

.close {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: none;
  border: none;
  opacity: 0;
  transform: scale(0.5);
  transition: inherit;
  cursor: pointer;
}

section {
  margin-bottom: 24px;
}

section:last-child {
  margin-bottom: 12px;
}

.input-wrapper {
  margin: 0 16px;
}

input {
  box-sizing: border-box;
  display: block;
  width: 100px;
  padding: 8px 6px;
  margin-right: 4px;

  font-size: 1em;
  border: none;
  text-align: left;
}

label {
  font-size: 0.9em;
  color: hsl(0, 0%, 60%);
}

.ratio-wrapper > span {
  font-size: 1.2em;
}

.ratio {
  font-size: 1.5em;
  font-weight: bold;
  margin: 8px 0;
}

.card:hover > .close {
  opacity: 1;
  transform: scale(1);
}

/* Disable number input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>