<template>
  <div class="controls">
    <button class="primary" @click="game.startGame()">Draw Cards</button>
    <button class="primary" @click="game.drawCard()">New Card</button>
    <button class="accent"  @click="game.cashOut()">Cash Out</button>
  </div>
</template>

<style scoped>
/* Controls styled globally */
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../store/game';

export default defineComponent({
  setup() {
    const game = useGameStore();
    return { game };
  }
});
</script>
