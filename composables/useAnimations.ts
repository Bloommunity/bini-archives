import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAnimations = () => {
	// Register ScrollTrigger plugin
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
	}

	// Animate elements on scroll
	const animateOnScroll = (selector: string, options: any = {}) => {
		if (!process.client) return;

		const elements = document.querySelectorAll(selector);
		elements.forEach((element, index) => {
			gsap.to(element, {
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay: index * 0.1,
				ease: "power2.out",
				...options,
			});
		});
	};

	// Staggered animation
	const staggerAnimation = (selector: string, fromVars: any = {}, toVars: any = {}) => {
		if (!process.client) return;

		gsap.fromTo(
			selector,
			{
				opacity: 0,
				y: 30,
				...fromVars,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: "power2.out",
				...toVars,
			},
		);
	};

	// Parallax effect
	const parallaxEffect = (selector: string, speed: number = 0.5) => {
		if (!process.client) return;

		gsap.registerEffect({
			name: "parallax",
			effect: (targets: any) => {
				return gsap.to(targets, {
					y: `${-100 * speed}px`,
					ease: "power1.inOut",
				});
			},
		});

		ScrollTrigger.create({
			onUpdate: () => {
				gsap.to(selector, {
					y: window.scrollY * speed,
					duration: 0,
				});
			},
		});
	};

	// Hover animation
	const hoverAnimation = (selector: string) => {
		if (!process.client) return;

		const elements = document.querySelectorAll(selector);
		elements.forEach((el) => {
			el.addEventListener("mouseenter", () => {
				gsap.to(el, {
					scale: 1.05,
					duration: 0.3,
					ease: "power2.out",
				});
			});
			el.addEventListener("mouseleave", () => {
				gsap.to(el, {
					scale: 1,
					duration: 0.3,
					ease: "power2.out",
				});
			});
		});
	};

	// Floating animation
	const floatingAnimation = (selector: string, duration: number = 3) => {
		if (!process.client) return;

		gsap.to(selector, {
			y: -20,
			duration,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	};

	// Pulse animation
	const pulseAnimation = (selector: string) => {
		if (!process.client) return;

		gsap.to(selector, {
			opacity: 0.5,
			duration: 1.5,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	};

	// Text animation - letter by letter
	const textLetterAnimation = (selector: string) => {
		if (!process.client) return;

		const elements = document.querySelectorAll(selector);
		elements.forEach((element) => {
			const text = element.textContent || "";
			element.innerHTML = text
				.split("")
				.map(
					(letter) => `<span style="display: inline-block; opacity: 0;">${letter}</span>`,
				)
				.join("");

			const spans = element.querySelectorAll("span");
			gsap.to(spans, {
				opacity: 1,
				duration: 0.05,
				stagger: 0.05,
				ease: "power2.out",
			});
		});
	};

	// Fade in on page load
	const fadeInOnLoad = (selector: string, delay: number = 0) => {
		if (!process.client) return;

		gsap.to(selector, {
			opacity: 1,
			duration: 1,
			delay,
			ease: "power2.out",
		});
	};

	return {
		animateOnScroll,
		staggerAnimation,
		parallaxEffect,
		hoverAnimation,
		floatingAnimation,
		pulseAnimation,
		textLetterAnimation,
		fadeInOnLoad,
	};
};
