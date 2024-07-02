<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils/cn';

	export let words: string;
	export let className: string | undefined = undefined;
	export let textClass: string | undefined = undefined;
	export let initialDelay: number = 0;
	export let delayWords: number = 0.15;

	const variants = {
		visible: (i: number) => ({
			opacity: 1,
			transition: {
				delay: i * delayWords + initialDelay,
				duration: 2
			}
		}),
		hidden: { opacity: 0 }
	};
</script>

<div class={cn('', className)}>
	<div class="mt-4">
		<div class="{textClass} leading-snug tracking-wide text-black dark:text-white">
			<Motion let:motion custom={0} {variants} initial="hidden" animate={'visible'}>
				<div use:motion>
					{#each words.split(' ') as word, idx (`${word}${idx}`)}
						<Motion let:motion {variants} custom={idx + 1} initial="hidden" animate={'visible'}>
							<span use:motion class="text-black dark:text-white">
								{word}{' '}
							</span>
						</Motion>
					{/each}
				</div>
			</Motion>
		</div>
	</div>
</div>
