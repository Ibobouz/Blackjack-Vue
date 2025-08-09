<template>
  <div class="page">
    <div class="overlay-card section bet-card">
      <h1 class="title">Place Your Bet</h1>
      <p class="subtitle">How much do you want to bet?</p>

      <div class="button-row">
        <button class="circle primary" @click="decreaseBet" :disabled="betDisplay <= minBet">−</button>
        <div class="bet-display" aria-live="polite">{{ betDisplay }}</div>
        <button class="circle primary" @click="increaseBet" :disabled="betDisplay >= game.chips">+</button>
      </div>

      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>

      <div class="button-row">
        <button id="startGame" class="primary" @click="startGame"
                :disabled="betDisplay < minBet || betDisplay > game.chips">
          Start Game
        </button>
        <button class="ghost" @click="$router.back()">Back</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bet-card { text-align: center; }
.bet-display {
  min-width: 120px;
  padding: .65rem 1rem;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(0,0,0,.25);
  font-weight: 800;
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: var(--gold);
  box-shadow: inset 0 0 20px rgba(255,255,255,.05);
}
</style>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';

const game = useGameStore();
const router = useRouter();

onMounted(() => {
  game.loadChips();
  game.loadPlayerName();
});

const minBet = 5;
const maxBet = computed(() => game.chips);

const betDisplay = ref<number>(Math.min(game.currentBet || minBet, game.chips));
const errorMessage = ref<string>('');

function increaseBet() {
  errorMessage.value = '';
  if (betDisplay.value + minBet > game.chips) {
    errorMessage.value = "You've reached the maximum!";
    betDisplay.value = game.chips;
  } else {
    betDisplay.value += minBet;
  }
}

function decreaseBet() {
  errorMessage.value = '';
  if (betDisplay.value - minBet < minBet) {
    errorMessage.value = "You've reached the minimum!";
    betDisplay.value = minBet;
  } else {
    betDisplay.value -= minBet;
  }
}

function startGame() {
  game.setBet(betDisplay.value);
  router.push({ name: 'Game' });
}
</script>

<style scoped>
.bet-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.button-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.CountButton {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
}

.counter {
  min-width: 3rem;
  text-align: center;
  font-size: 1.2rem;
}

.error-message {
  color: red;
  font-weight: bold;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
