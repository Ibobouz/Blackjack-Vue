<template>
  <div class="hand" id="cardsEl">
    <Card 
      v-for="(card, i) in game.cards"
      :key="i"
      :img="card.img"
      :alt="`${card.value} of ${card.suit}`" />
  </div>
  <p class="sum" id="sumEl">Sum: {{ game.sum }}</p>
  <p class="sum" id="message">{{ game.message }}</p>
</template>

<style scoped>
/* Uses global .hand and .sum */
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../store/game';
import Card from './Card.vue';


export default defineComponent({
  components: { Card },
  setup() {
    const game = useGameStore();
    return { game };
  }
});
</script>
