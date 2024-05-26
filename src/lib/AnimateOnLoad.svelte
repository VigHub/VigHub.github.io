<script>
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';

	let animate = !$navigating;
	let loaded = false;

	onMount(() => (loaded = true));
</script>

{#if animate}
	{#if loaded}
		<div in:fade={{ delay: 500, duration: 500 }} class="contents">
			<slot />
		</div>
	{/if}
{:else}
	<slot />
{/if}
