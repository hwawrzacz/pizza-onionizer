<template>
  <div id="app">
    <ul>
      <li v-for="card in cards" :key="cards.indexOf(card)">
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fx-wrap {
  flex-wrap: wrap;
}

.fx-no-wrap {
  flex-wrap: no-wrap;
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

.fx-h-between {
  justify-content: space-between;
}

.fx-h-around {
  justify-content: space-around;
}

.fx-v-center {
  align-items: center;
}
</style>
