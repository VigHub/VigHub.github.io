<script lang="ts">
	import Project from '$lib/Project.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import CardProject from '$lib/CardProject.svelte';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center items-center mt-5">
	{#await data.awaitObject.projects}
		<ProgressRadial width="w-16" />
	{:then projects}
		<div class="grid grid-cols-1 md:grid-cols-2 w-5/6 gap-1">
			{#each projects as project}
				<!-- <Project {project} /> -->
				<CardProject {project} />
			{/each}
		</div>
	{/await}
</div>
