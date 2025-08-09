<template>
  <p id="message" class="subtitle">{{ game.message }}</p>
</template>

<style scoped>
/* Message inherits subtitle styling */
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
