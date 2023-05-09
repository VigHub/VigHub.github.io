<script lang="ts">
	import type { ProjectType } from '$lib/Project';
	import Project from '$lib/Project.svelte';

	let projects: Array<ProjectType> = [
		{
			date: '2015-10-10',
			image: 'https://source.unsplash.com/random/200x200',
			title: 'Can coffee make you a better developer?',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
			technologies: ['python', 'svelte']
		},
		{
			date: '2015-10-10',
			image: 'https://source.unsplash.com/random/200x200',
			title: 'Title2',
			description: 'description',
			technologies: ['python', 'svelte']
		}
	];
</script>

<div class="h-full m-3 flex justify-center items-center">
	<div class="space-y-5">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</div>
