<template>
  <div class="card" @click="sendNewCardRequest">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
    <span class="label">Add new calculation</span>
  </div>
</template>

<script>
export default {
  name: "CardNew",
  methods: {
    sendNewCardRequest: function () {
      this.$emit("add-card");
    },
  },
};
</script>

<style scoped>
::selection {
  color: inherit;
  background-color: inherit;
}

.card {
  position: relative;
  width: 350px;
  height: 150px;
  padding: 8px;
  margin: 16px;

  overflow: hidden;
  border: 1px solid hsl(0, 0%, 80%);
  background-color: hsl(0, 0%, 95%);
  border-radius: 6px;
  cursor: pointer;
  transition: 200ms;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%) scale(2);
  font-size: 1.5em;
  opacity: 0;
  text-align: center;
  transition: inherit;
  color: hsl(0, 0%, 50%);
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  opacity: 1;
  stroke-width: 1;
  color: hsl(1, 0%, 50%);
  transform: translateX(-50%) translateY(-50%);
  transition: inherit;
}

.card:hover > .icon {
  transform: translateX(-50%) translateY(-50%) scale(0.5);
  opacity: 0;
}

.card:hover > .label {
  transform: translateX(-50%) translateY(-50%) scale(1);
  opacity: 1;
}
</style>