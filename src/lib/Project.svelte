<script lang="ts">
	import moment from 'moment';
	import type { ProjectType } from './interfaces';

	export let project: ProjectType;
</script>

<a
	class="card card-hover overflow-hidden border-2 rounded-2xl
					 dark:border-gray-500 border-gray-400"
	href={project.link}
>
	<header class="card-header">
		<img
			class="bg-black/50 w-full md:h-[275px] rounded-xl"
			src={project.image}
			alt="Project {project.title} image"
		/>
	</header>
	<div class="p-4 space-y-2">
		<small>{moment(project.date).format('MMMM YYYY')}</small>
		<h3 class="h3" data-toc-ignore>{project.title}</h3>
		<article>
			<p class="">{project.description}</p>
		</article>
		<hr class="opacity-50" />
	</div>
	<footer class="p-4 pt-1 flex justify-start items-center space-x-4">
		<!-- <Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 32, h: 32 })} width="w-8" /> -->
		<div
			class="grid grid-cols-2 md:grid-cols-{project.technologies
				.length} md:gap-x-1 gap-x-1 gap-y-2 w-full"
		>
			{#each project.technologies as tech}
				<span class="chip max-w-[150px] variant-ghost-primary hover:variant-filled">{tech}</span>
			{/each}
		</div>
	</footer>
</a>
