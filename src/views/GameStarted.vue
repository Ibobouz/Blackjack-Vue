<template>
  <div class="page">
    <div class="overlay-card section game-card">
      <div class="status">
        <span>Bet: <strong>{{ game.currentBet }}$</strong></span>
        <span class="sep">|</span>
        <span>Remaining Chips: <strong>{{ game.chips - game.currentBet }}$</strong></span>
      </div>
      <div>
         <span class="status">Player: <strong>{{ game.playerName }}</strong></span>
      </div>

      <GameBoard />

      <div class="controls">
        <button class="primary" @click="onDrawCards" :disabled="game.isAlive || game.roundFinished">Draw Cards</button>
        <button class="primary" @click="onNewCard"   :disabled="!game.isAlive || game.hasBlackjack">New Card</button>
        <button class="accent"  @click="cashOut"     :disabled="game.roundSettled || (!game.isAlive && !game.roundFinished)">Cash Out</button>
        <button class="ghost"   @click="backToStart" :disabled="game.isAlive">Return To Menu</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-card { text-align: center; }
.status { display: flex; gap: .5rem; align-items: center; justify-content: center; }
.status strong { color: var(--gold); }
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';
import GameBoard from '@/components/GameBoard.vue';


const game   = useGameStore();
const router = useRouter();

onMounted (() => {
  game.resetRound({keepBet: true})
})

function onDrawCards() {
  game.startGame();          
}

function onNewCard() {
  game.drawCard();       
}

function cashOut() {
 game.cashOut()
}

function backToStart() {

  if (!game.roundSettled && (game.isAlive || game.roundFinished)) {
    game.cashOut(); 
  }
  game.resetRound({keepBet: false})
  game.saveChips()
  router.push({ name: 'Start' });
}
</script>
<style scoped>
.game-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.controls {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.back {
  margin-top: 1.5rem;
}
</style>
