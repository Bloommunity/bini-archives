<template>
	<button
		:data-visible="visible ? 'true' : 'false'"
		:class="['scroll-top', { clicked, scrollingUp, 'is-visible': visible }]"
		@click="handleClick"
		aria-label="Scroll to top"
		:aria-hidden="!visible"
	>
		<!-- Compact up arrow with emoji float animation -->
		<div class="arrow-icon" aria-hidden="true">
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 18V6M12 6L6 12M12 6L18 12"
					stroke="white"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<div class="emoji-cloud" aria-hidden="true">
			<span v-for="n in 5" :key="`emoji-${emojiKey}-${n}`" class="emoji">&#x1F33A;</span>
		</div>
	</button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{ variant?: "pink" | "teal" }>();
const variant = props.variant ?? "pink";
const variantColors =
	variant === "teal"
		? { start: "#06b6d4", end: "#7c3aed" }
		: { start: "#ec4899", end: "#f472b6" };

const visible = ref(false);
const clicked = ref(false);
const scrollingUp = ref(false);
const emojiKey = ref(0);
let lastScroll = 0;

function updateVisibility() {
	const doc = document.documentElement;
	const scrollTop = window.pageYOffset || doc.scrollTop;
	const maxScroll = doc.scrollHeight - window.innerHeight;
	const scrollThreshold = 200;

	// Show button once scrolled down 200px and keep it visible throughout scroll
	visible.value = maxScroll > 0 ? scrollTop > scrollThreshold : false;
	const isScrollingUp = scrollTop < lastScroll && scrollTop > 0;
	if (isScrollingUp && !scrollingUp.value) {
		emojiKey.value += 1;
	}
	scrollingUp.value = isScrollingUp;
	lastScroll = scrollTop;
}

function handleClick() {
	clicked.value = true;
	emojiKey.value += 1;
	// ensure we play the click animation while smooth-scrolling
	scrollingUp.value = false;
	// smooth-scroll to top
	window.scrollTo({ top: 0, behavior: "smooth" });

	globalThis.setTimeout(() => {
		clicked.value = false;
	}, 800);
}

onMounted(() => {
	lastScroll = window.pageYOffset || document.documentElement.scrollTop;

	window.addEventListener("scroll", updateVisibility, { passive: true });
	window.addEventListener("resize", updateVisibility);

	updateVisibility();
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", updateVisibility);
	window.removeEventListener("resize", updateVisibility);
});
</script>

<style scoped>
.scroll-top {
	position: fixed;
	right: 1rem;
	bottom: 1.25rem;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	box-shadow: 0 16px 34px rgba(0, 0, 0, 0.32);
	border: 1px solid rgba(255, 255, 255, 0.16);
	cursor: pointer;
	transform-origin: center;
	transition:
		transform 280ms cubic-bezier(0.2, 0.9, 0.2, 1),
		opacity 240ms ease,
		box-shadow 240ms ease;
	opacity: 0;
	pointer-events: none;
	z-index: 99999 !important;
}

.arrow-icon {
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}
.arrow-icon svg {
	width: 18px;
	height: 18px;
	transition: transform 220ms ease;
}
.scroll-top.clicked .arrow-icon svg {
	animation: arrow-pulse 900ms ease-in-out;
	animation-delay: 80ms;
}
.emoji-cloud {
	position: absolute;
	inset: 0;
	pointer-events: none;
}
.emoji {
	position: absolute;
	opacity: 0;
	font-size: 18px;
	text-shadow: 0 0 4px rgba(255, 255, 255, 0.65);
	transform: translate(0, 0) scale(1);
	animation-fill-mode: forwards;
}
.scroll-top.clicked .emoji {
	opacity: 1;
}
.scroll-top.clicked .emoji:nth-child(1) {
	animation: emoji-path-1 760ms cubic-bezier(0.22, 0.69, 0.72, 1) forwards;
	animation-delay: 120ms;
}
.scroll-top.clicked .emoji:nth-child(2) {
	animation: emoji-path-2 760ms cubic-bezier(0.22, 0.69, 0.72, 1) forwards;
	animation-delay: 160ms;
}
.scroll-top.clicked .emoji:nth-child(3) {
	animation: emoji-path-3 760ms cubic-bezier(0.22, 0.69, 0.72, 1) forwards;
	animation-delay: 200ms;
}
.scroll-top.clicked .emoji:nth-child(4) {
	animation: emoji-path-4 760ms cubic-bezier(0.22, 0.69, 0.72, 1) forwards;
	animation-delay: 240ms;
}
.scroll-top.clicked .emoji:nth-child(5) {
	animation: emoji-path-5 760ms cubic-bezier(0.22, 0.69, 0.72, 1) forwards;
	animation-delay: 280ms;
}
.emoji:nth-child(1) {
	left: 8px;
	bottom: 6px;
}
.emoji:nth-child(2) {
	left: 10px;
	bottom: 4px;
}
.emoji:nth-child(3) {
	left: 14px;
	bottom: 6px;
}
.emoji:nth-child(4) {
	left: 18px;
	bottom: 4px;
}
.emoji:nth-child(5) {
	left: 24px;
	bottom: 7px;
}
@keyframes emoji-path-1 {
	0% {
		opacity: 1;
		transform: translate(0, 0) scale(1);
	}
	30% {
		opacity: 1;
		transform: translate(-3px, -14px) scale(1.06);
	}
	60% {
		opacity: 0.92;
		transform: translate(-10px, -30px) scale(1.12);
	}
	100% {
		opacity: 0;
		transform: translate(-14px, -48px) scale(1.18);
	}
}
@keyframes emoji-path-2 {
	0% {
		opacity: 1;
		transform: translate(0, 0) scale(1);
	}
	30% {
		opacity: 1;
		transform: translate(0px, -16px) scale(1.07);
	}
	60% {
		opacity: 0.9;
		transform: translate(0px, -32px) scale(1.14);
	}
	100% {
		opacity: 0;
		transform: translate(0px, -54px) scale(1.2);
	}
}
@keyframes emoji-path-3 {
	0% {
		opacity: 1;
		transform: translate(0, 0) scale(1);
	}
	30% {
		opacity: 1;
		transform: translate(3px, -14px) scale(1.05);
	}
	60% {
		opacity: 0.88;
		transform: translate(8px, -30px) scale(1.12);
	}
	100% {
		opacity: 0;
		transform: translate(12px, -50px) scale(1.16);
	}
}
@keyframes emoji-path-4 {
	0% {
		opacity: 1;
		transform: translate(0, 0) scale(1);
	}
	30% {
		opacity: 1;
		transform: translate(5px, -12px) scale(1.04);
	}
	60% {
		opacity: 0.86;
		transform: translate(10px, -26px) scale(1.1);
	}
	100% {
		opacity: 0;
		transform: translate(14px, -44px) scale(1.14);
	}
}
@keyframes emoji-path-5 {
	0% {
		opacity: 1;
		transform: translate(0, 0) scale(1);
	}
	30% {
		opacity: 1;
		transform: translate(7px, -10px) scale(1.03);
	}
	60% {
		opacity: 0.84;
		transform: translate(12px, -24px) scale(1.08);
	}
	100% {
		opacity: 0;
		transform: translate(16px, -42px) scale(1.12);
	}
}
@keyframes arrow-pulse {
	0% {
		transform: scale(1) translateY(0);
	}
	35% {
		transform: scale(1.08) translateY(-1px);
	}
	70% {
		transform: scale(1.14) translateY(-3px);
	}
	100% {
		transform: scale(1) translateY(0);
	}
}

/* When visible make it interactive */
.scroll-top.is-visible {
	opacity: 1;
	pointer-events: auto;
}

/* pressed/pop animation */
@keyframes pop {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.88) rotate(-6deg);
	}
	100% {
		transform: scale(1);
	}
}

.scroll-top.clicked {
	animation: pop 420ms cubic-bezier(0.2, 0.9, 0.2, 1);
}

/* bloom ripple when clicked */
.scroll-top.clicked::after {
	content: "";
	position: absolute;
	width: 120%;
	height: 120%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) scale(0);
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.14);
	animation: bloom 520ms ease-out forwards;
	pointer-events: none;
}

@keyframes bloom {
	0% {
		transform: translate(-50%, -50%) scale(0);
		opacity: 0.95;
	}
	60% {
		transform: translate(-50%, -50%) scale(1.1);
		opacity: 0.5;
	}
	100% {
		transform: translate(-50%, -50%) scale(1.5);
		opacity: 0;
	}
}

/* subtle lift while user scrolls up */
.scroll-top.scrollingUp {
	transform: translateY(-6px) scale(1.02);
	box-shadow: 0 16px 40px rgba(2, 6, 23, 0.22);
}
</style>
