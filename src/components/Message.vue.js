import { defineComponent } from 'vue';
import { useGameStore } from '../store/game';
export default defineComponent({
    setup() {
        const game = useGameStore();
        return { game };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    id: "message",
    ...{ class: "subtitle" },
});
(__VLS_ctx.game.message);
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=Message.vue.js.map