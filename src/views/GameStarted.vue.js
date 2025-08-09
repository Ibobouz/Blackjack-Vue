import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';
import GameBoard from '@/components/GameBoard.vue';
const game = useGameStore();
const router = useRouter();
onMounted(() => {
    game.resetRound({ keepBet: true });
});
function onDrawCards() {
    game.startGame();
}
function onNewCard() {
    game.drawCard();
}
function cashOut() {
    game.cashOut();
}
function backToStart() {
    if (!game.roundSettled && (game.isAlive || game.roundFinished)) {
        game.cashOut();
    }
    game.resetRound({ keepBet: false });
    game.saveChips();
    router.push({ name: 'Start' });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['status']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "overlay-card section game-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "status" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.game.currentBet);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "sep" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.game.chips - __VLS_ctx.game.currentBet);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "status" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.game.playerName);
/** @type {[typeof GameBoard, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(GameBoard, new GameBoard({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "controls" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onDrawCards) },
    ...{ class: "primary" },
    disabled: (__VLS_ctx.game.isAlive || __VLS_ctx.game.roundFinished),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onNewCard) },
    ...{ class: "primary" },
    disabled: (!__VLS_ctx.game.isAlive || __VLS_ctx.game.hasBlackjack),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.cashOut) },
    ...{ class: "accent" },
    disabled: (__VLS_ctx.game.roundSettled || (!__VLS_ctx.game.isAlive && !__VLS_ctx.game.roundFinished)),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.backToStart) },
    ...{ class: "ghost" },
    disabled: (__VLS_ctx.game.isAlive),
});
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay-card']} */ ;
/** @type {__VLS_StyleScopedClasses['section']} */ ;
/** @type {__VLS_StyleScopedClasses['game-card']} */ ;
/** @type {__VLS_StyleScopedClasses['status']} */ ;
/** @type {__VLS_StyleScopedClasses['sep']} */ ;
/** @type {__VLS_StyleScopedClasses['status']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
/** @type {__VLS_StyleScopedClasses['accent']} */ ;
/** @type {__VLS_StyleScopedClasses['ghost']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            GameBoard: GameBoard,
            game: game,
            onDrawCards: onDrawCards,
            onNewCard: onNewCard,
            cashOut: cashOut,
            backToStart: backToStart,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=GameStarted.vue.js.map