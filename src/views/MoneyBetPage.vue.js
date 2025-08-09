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
const betDisplay = ref(Math.min(game.currentBet || minBet, game.chips));
const errorMessage = ref('');
function increaseBet() {
    errorMessage.value = '';
    if (betDisplay.value + minBet > game.chips) {
        errorMessage.value = "You've reached the maximum!";
        betDisplay.value = game.chips;
    }
    else {
        betDisplay.value += minBet;
    }
}
function decreaseBet() {
    errorMessage.value = '';
    if (betDisplay.value - minBet < minBet) {
        errorMessage.value = "You've reached the minimum!";
        betDisplay.value = minBet;
    }
    else {
        betDisplay.value -= minBet;
    }
}
function startGame() {
    game.setBet(betDisplay.value);
    router.push({ name: 'Game' });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "overlay-card section bet-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "subtitle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "button-row" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.decreaseBet) },
    ...{ class: "circle primary" },
    disabled: (__VLS_ctx.betDisplay <= __VLS_ctx.minBet),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bet-display" },
    'aria-live': "polite",
});
(__VLS_ctx.betDisplay);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.increaseBet) },
    ...{ class: "circle primary" },
    disabled: (__VLS_ctx.betDisplay >= __VLS_ctx.game.chips),
});
if (__VLS_ctx.errorMessage) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "error" },
    });
    (__VLS_ctx.errorMessage);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "button-row" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.startGame) },
    id: "startGame",
    ...{ class: "primary" },
    disabled: (__VLS_ctx.betDisplay < __VLS_ctx.minBet || __VLS_ctx.betDisplay > __VLS_ctx.game.chips),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$router.back();
        } },
    ...{ class: "ghost" },
});
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay-card']} */ ;
/** @type {__VLS_StyleScopedClasses['section']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-card']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['button-row']} */ ;
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-display']} */ ;
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['button-row']} */ ;
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ghost']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            game: game,
            minBet: minBet,
            betDisplay: betDisplay,
            errorMessage: errorMessage,
            increaseBet: increaseBet,
            decreaseBet: decreaseBet,
            startGame: startGame,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=MoneyBetPage.vue.js.map