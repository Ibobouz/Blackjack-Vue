import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Card',
    props: {
        img: { type: String, required: true },
        alt: { type: String, required: true }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.img),
    alt: (__VLS_ctx.alt),
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=Card.vue.js.map