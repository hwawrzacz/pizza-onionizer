<template>
  <div id="app" class="fx-row fx-wrap fx-h-c">
    <ul class="fx-row fx-wrap fx-h-center">
      <li v-for="id in cardsIds" :key="id">
        <CardDetails :idCard="id" @deleteCard="deleteCard" />
      </li>
    </ul>
    <section class="caption--no-cards" v-if="!cardsIds.length">
      <h1>No cards added</h1>
      <p>
        Add new cards to compare your potential pizza's
        surface-area-to-price-ratio
      </p>
    </section>
    <button
      class="button--new-card fx-row fx-v-center"
      :class="{ up: !cardsIds.length }"
      @click="addNewCard"
    >
      <i class="material-icons">add</i>Add new card
    </button>
  </div>
</template>

<script>
import CardDetails from "./components/card-details/CardDetails.vue";

export default {
  name: "App",
  components: {
    CardDetails,
  },

  data: function () {
    return {
      id: 0,
      cardsIds: [],
    };
  },

  mounted() {
    this.addNewCard();
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 73 && e.ctrlKey) {
        this.addNewCard();
      }
    });
  },

  methods: {
    addNewCard() {
      this.cardsIds.push(this.id++);
    },
    deleteCard(id) {
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
  bottom: 32px;
  left: 50%;
  padding: 8px 16px;

  transform: translateX(-50%);
  border-radius: 50px;
  color: inherit;
  border: none;
  font-size: 1.1em;
  background-color: hsl(210, 29%, 24%);
  color: hsl(0, 0%, 95%);
  cursor: pointer;
  transition: 300ms;

  box-shadow: 0 4px 10px -4px #666;
}

.button--new-card > i {
  margin-right: 8px;
}

.button--new-card.up {
  bottom: 40%;
}

.caption--no-cards {
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.caption--no-cards > h1 {
  margin-bottom: 16px;
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
