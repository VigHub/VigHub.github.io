<script lang="ts">
	import type { ProjectType } from '$lib/Project';
	import Project from '$lib/Project.svelte';
	import project_data from './projects_data.json';

	let projects: Array<ProjectType> = project_data;
</script>

<div class="h-full m-3 flex justify-center items-center">
	<div class="space-y-10">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</div>
