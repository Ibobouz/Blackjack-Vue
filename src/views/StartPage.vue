<template>
  <div class="page">
    <div class="overlay-card section start-card">
      <h1 class="title">Blackjack</h1>
      <p class="subtitle">Want to play a round?</p>

      <div class="field">
        <label for="name">Name</label>
        <input id="name" v-model="nameInput" placeholder="Dein Name" />
      </div>

      <p class="meta">
        Last Player: <strong>{{ game.playerName || '—' }}</strong>
        <span class="sep">|</span>
        Chips: <strong>{{ game.chips }}$</strong>
      </p>

      <div class="button-row">
        <button class="primary" @click="goToBet">Continue</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.start-card { text-align: center; }
</style>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';

export default defineComponent({
  setup() {
    const router = useRouter();
    const game   = useGameStore();
    let nameInput = ref(game.playerName);  

    onMounted(() => {
      game.loadPlayerName();
      nameInput.value = game.playerName;
    });

    function goToBet() {
      game.setPlayerName(nameInput.value);
      router.push({ name: 'MoneyBet' });
    };

    return { game, nameInput, goToBet };
  }
});
</script>
