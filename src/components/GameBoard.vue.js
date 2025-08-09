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
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = { Card };
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hand" },
    id: "cardsEl",
});
for (const [card, i] of __VLS_getVForSourceType((__VLS_ctx.game.cards))) {
    const __VLS_0 = {}.Card;
    /** @type {[typeof __VLS_components.Card, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        key: (i),
        img: (card.img),
        alt: (`${card.value} of ${card.suit}`),
    }));
    const __VLS_2 = __VLS_1({
        key: (i),
        img: (card.img),
        alt: (`${card.value} of ${card.suit}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "sum" },
    id: "sumEl",
});
(__VLS_ctx.game.sum);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "sum" },
    id: "message",
});
(__VLS_ctx.game.message);
/** @type {__VLS_StyleScopedClasses['hand']} */ ;
/** @type {__VLS_StyleScopedClasses['sum']} */ ;
/** @type {__VLS_StyleScopedClasses['sum']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=GameBoard.vue.js.map