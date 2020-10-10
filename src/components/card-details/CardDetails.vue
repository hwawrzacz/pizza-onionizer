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
        <EditableLabel
          name="price"
          :type="'number'"
          :placeholder="'e.g. 15'"
          :label="'Price'"
          :value="price"
          @valueChange="setPrice"
        />
      </div>

      <div class="fx-col fx-v-center">
        <EditableLabel
          name="price"
          :type="'number'"
          :placeholder="'e.g. 32'"
          :label="'Diameter'"
          :value="diameter"
          @valueChange="setDiameter"
        />
      </div>
    </div>
    <span>{{ getRatio() }}</span>
  </div>
</template>

<script>
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
      return ratio || "Unknown";
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 350px;

  border: 1px solid hsl(0, 0%, 50%);
  background-color: hsl(0, 0%, 95%);
  border-radius: 6px;
  overflow: hidden;
  transition: 200ms;
}
</style>