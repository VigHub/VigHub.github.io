<script lang="ts">
	import type { ProjectType } from '$lib/Project';
	import Project from '$lib/Project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const projects = data.projects as ProjectType[];
</script>

<div class="h-full m-3 flex justify-center items-center">
	<div class="space-y-10">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</div>
