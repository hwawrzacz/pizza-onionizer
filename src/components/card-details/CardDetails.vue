<template>
  <div class="card">
    <button class="close"><i>close</i></button>
    <EditableLabel
      :type="'text'"
      :placeholder="'e.g. Margherita'"
      :value="label"
      @valueChange="setLabel"
    />
    <div class="fx-row fx-h-between fx-v-center">
      <div class="input-wrapper">
        <label for="price">Price</label>
        <div class="fx-row fx-v-center">
          <input
            name="price"
            type="number"
            placeholder="e.g. 15"
            v-model="price"
            @valueChange="setPrice"
          />

          <i>monetization_on</i>
        </div>
      </div>

      <div class="fx-col fx-v-center">
        <label for="diameter">Diameter</label>
        <div class="fx-row fx-v-center">
          <input
            name="diameter"
            type="number"
            placeholder="e.g. 32"
            v-model="diameter"
            @valueChange="setDiameter"
          />
          <span>[u]</span>
        </div>
      </div>
    </div>
    <div class="ratio-wrapper fx-col fx-h-center fx-wrap">
      <label for="ratio">Ratio</label>
      <span name="ratio"
        ><strong>{{ getRatio() }}</strong> <i>monetization_on</i> per
        <strong>[u<sup>2</sup>]</strong></span
      >
    </div>
  </div>
</template>

<script scoped>
import EditableLabel from "../label-editable/EditableLabel.vue";
export default {
  name: "CardDetails",
  components: {
    EditableLabel,
  },

  data: function () {
    return {
      label: "asd",
      price: null,
      diameter: null,
    };
  },

  methods: {
    setLabel: function (value) {
      this.label = value;
      console.log(`label: ${value}`);
    },

    setPrice: function (value) {
      this.price = value;
      console.log(`price: ${value}`);
    },

    setDiameter: function (value) {
      this.diameter = value;
      console.log(`diameter: ${value}`);
    },

    getRatio() {
      const ratio = (Math.PI * Math.pow(this.diameter / 2, 2)) / this.price;
      return ratio ? ratio.toFixed(2) : "Unknown";
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 250px;

  border: 1px solid hsl(0, 0%, 50%);
  background-color: hsl(0, 0%, 95%);
  border-radius: 6px;
  overflow: hidden;
  transition: 200ms;
}

input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 8px 6px;

  font-size: 1em;
  border: none;
  text-align: center;
  cursor: text;
}

label {
  font-size: 0.9em;
}

.ratio-wrapper > span {
  font-size: 1.2em;
}

/* Disable number input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>