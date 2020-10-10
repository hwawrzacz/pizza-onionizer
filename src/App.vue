<template>
  <div id="app" class="fx-row fx-wrap fx-h-c">
    <ul class="fx-row fx-wrap fx-h-center">
      <li v-for="id in cardsIds" :key="id">
        <CardDetails :idCard="id" @deleteCard="deleteCard" />
      </li>
      <li class="fx-row fx-h-center fx-v-center">
        <CardNew v-on:add-card="addNewCard" />
      </li>
    </ul>
    <button class="button--new-card fx-row fx-v-center" @click="addNewCard">
      <i class="material-icons">add</i>Add new card
    </button>
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
      id: 0,
      cardsIds: [0],
    };
  },

  methods: {
    addNewCard: function () {
      console.log("new-card");
      this.cardsIds.push(++this.id);
    },
    deleteCard: function (id) {
      this.cardsIds.splice(this.cardsIds.indexOf(id), 1);
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

.button--new-card {
  position: fixed;
  bottom: 16px;
  left: 50%;
  padding: 8px 16px;

  transform: translateX(-50%);
  border-radius: 50px;
  color: inherit;
  border: none;
  font-size: 1.1em;
  background-color: hsl(210, 29%, 24%);
  color: hsl(0, 0%, 95%);

  box-shadow: 0 4px 10px -4px #666;
}
.button--new-card > i {
  margin-right: 8px;
}

/* Common */
input::placeholder {
  color: hsl(0, 0%, 85%);
  font-weight: normal;
}

/* Flex */
.fx-row {
  display: flex;
  flex-direction: row;
}

.fx-col {
  display: flex;
  flex-direction: column;
}

.fx-wrap {
  flex-wrap: wrap;
}

.fx-no-wrap {
  flex-wrap: nowrap;
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
