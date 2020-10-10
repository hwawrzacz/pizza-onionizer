<template>
  <div id="app">
    <ul class="fx-row row-wrap fx-h-start">
      <li
        v-for="card in cards"
        :key="cards.indexOf(card)"
        class="fx-row fx-h-center fx-v-stretch"
      >
        <CardDetails v-on:add-card="addNewCard" />
      </li>
      <li><CardNew v-on:add-card="addNewCard" /></li>
    </ul>
  </div>
</template>

<script>
import CardNew from "./components/card-new/CardNew.vue";
import CardDetails from "./components/card-details/CardDetails.vue";

export default {
  name: "App",
  components: {
    CardNew,
    CardDetails,
  },

  data: function () {
    return {
      cards: [],
    };
  },

  methods: {
    addNewCard: function () {
      console.log("new-card");
      this.cards.push(CardDetails);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style: none;
  margin: 0 auto;
}

/* Common */
input::placeholder {
  color: hsl(0, 0%, 85%);
  font-weight: normal;
}

/* Flex */
.fx-wrap {
  flex-wrap: wrap;
}

.fx-no-wrap {
  flex-wrap: nowrap;
}

.fx-row {
  display: flex;
  flex-direction: row;
}

.fx-col {
  display: flex;
  flex-direction: column;
}

.fx-h-center {
  justify-content: center;
}

.fx-h-start {
  justify-content: flex-start;
}

.fx-h-between {
  justify-content: space-between;
}

.fx-h-around {
  justify-content: space-around;
}

.fx-h-stretch {
  justify-content: stretch;
}

.fx-v-center {
  align-items: center;
}

.fx-v-start {
  align-items: flex-start;
}

.fx-v-stretch {
  align-items: stretch;
}

.fx-grow-1 {
  flex-grow: 1;
}
</style>
