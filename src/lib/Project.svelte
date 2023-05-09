<script lang="ts">
	import type { ProjectType } from './Project';

	export let project: ProjectType;
</script>

<div class="max-w-sm w-full lg:max-w-full lg:flex card-hover5">
	<div
		class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
		style="background-image: url('https://source.unsplash.com/random/200x200')"
		title="Woman holding a mug"
	/>
	<div
		class="variant-ghost border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r-2xl p-4 flex flex-col justify-between leading-normal"
	>
		<div class="mb-8 m-5 md:w-[62rem]">
			<p class="text-sm flex items-center">
				<svg
					class="fill-current text-gray-500 w-3 h-3 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path
						d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
					/>
				</svg>
				{project.date}
			</p>
			<div class=" font-bold text-xl mb-2">{project.title}</div>
			<p class="text-base">
				{project.description}
			</p>
		</div>
		<div class="space-x-2 ml-5">
			{#each project.technologies as tech}
				<span class="chip variant-ghost-primary hover:variant-filled">{tech}</span>
			{/each}
		</div>
	</div>
</div>
