import Vue from 'vue';
export const EventBus = new Vue();

export const EventBusEvent = Object.freeze({
  ADD_CARD: 'add-card',
  SORT_CARDS: 'sort-cards',
  FILTER_BREAKPOINT: 'filter-breakpoint'
})