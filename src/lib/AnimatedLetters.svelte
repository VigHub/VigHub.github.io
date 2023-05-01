<script>
	import Typewriter from 'svelte-typewriter';

	export let text = 'Text';
	export let fontSize = 30;
	export let interval = 65;
	export let delay = 1000;

	const splitStr = () => {
		const arr = [];
		for (let i = 0; i < text.length; i++) {
			arr.push(text[i]);
		}
		return arr;
	};

	const textArray = splitStr();
</script>

<Typewriter {interval} {delay} mode="cascade" >
	<span class="text-light">
		{#each textArray as char}
			<span
				style="font-size: {fontSize}px;"
				class="letter dark:hover:text-[#0FBA81] hover:text-[#0b7caf]">{char}</span
			>
		{/each}
	</span>
</Typewriter>

<style lang="postcss">
	:root {
		--cursor-width: 10px;
		--cursor-color: var(--color-primary-800);
	}

	@keyframes rubberBand {
		from {
			transform: scale3d(1, 1, 1);
		}

		30% {
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			transform: scale3d(1.05, 0.95, 1);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}

	.letter {
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-iteration-count: 1;
		display: inline-block;
	}

	.letter:hover {
		font-weight: bold;
		animation: rubberBand 1s;
	}
</style>
