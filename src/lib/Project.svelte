<script lang="ts">
	import type { ProjectType } from './Project';

	export let project: ProjectType;
</script>

<div class="max-w-sm w-full lg:max-w-full lg:flex card-hover5 hover:scale-105 duration-1000">
	<div
		class="h-48 lg:h-auto lg:w-56 flex-none bg-cover bg-center lg:rounded-l-2xl text-center overflow-hidden"
		style="background-image: url('/images/{project.image}')"
		title="Project {project.title} image"
	/>
	<a href={project.link} class="unstyled">
		<div
			class="variant-ghost border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r-2xl p-4 flex flex-col justify-between leading-normal"
		>
			<div class="mb-8 m-5 md:w-[62rem]">
				<p class="text-sm flex items-center no-underline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1000 1000"
						style="fill:#0273a2"
						class="h-4 w-4 mr-2"
						><title>Earliest Delivery Time SVG icon</title><path
							d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490s490-219.4,490-490S770.6,10,500,10z M500,892c-216.5,0-392-175.5-392-392s175.5-392,392-392s392,175.5,392,392S716.5,892,500,892z"
						/><path
							d="M475.5,206h49c13.5,0,24.5,11,24.5,24.5v294c0,13.5-11,24.5-24.5,24.5h-49c-13.5,0-24.5-10.9-24.5-24.5v-294C451,217,462,206,475.5,206z"
						/><path
							d="M475.5,500h245c13.5,0,24.5,11,24.5,24.5v49c0,13.6-11,24.5-24.5,24.5h-245c-13.5,0-24.5-10.9-24.5-24.5v-49C451,511,462,500,475.5,500z"
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
	</a>
</div>
