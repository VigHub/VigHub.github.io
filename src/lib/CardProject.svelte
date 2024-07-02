<script lang="ts">
	import { CardBody, CardContainer, CardItem } from '$lib/3DCard';
	import { type ProjectType } from '$lib/interfaces';
	import moment from 'moment';

	export let project: ProjectType;
	let isMouseEntered = false;
</script>

<CardContainer bind:isMouseEntered className="inter-var">
	<CardBody
		className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
        dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
        border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border"
	>
		<CardItem {isMouseEntered} translateZ="50" className="text-xl font-bold  dark:text-white">
			{project.title}
		</CardItem>

		<CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
			<img
				src={project.image}
				height="1000"
				width="1000"
				class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
				alt="thumbnail"
			/>
		</CardItem>
		<CardItem
			{isMouseEntered}
			translateZ="60"
			className="text-neutral-500 text-sm text-justify mt-2 dark:text-neutral-300 px-3"
		>
			{project.description}
		</CardItem>
		<CardItem
			{isMouseEntered}
			translateZ={20}
			className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white w-full text-right"
		>
			{moment(project.date).format('MMMM YYYY')}
		</CardItem>
		<div class="mt-3 flex items-center space-x-1">
			{#each project.technologies as tech, idx}
				<CardItem
					{isMouseEntered}
					translateZ={20}
					className="h-10 px-4 overflow-clip py-2 flex rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
				>
					<span class="my-auto">{tech}</span>
				</CardItem>
			{/each}
		</div>
	</CardBody>
</CardContainer>
