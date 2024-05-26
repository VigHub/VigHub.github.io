<script lang="ts">
	import NamePresentation from '$lib/NamePresentation.svelte';
	import SkillTitle from '$lib/SkillTitle.svelte';
	import { fade, fly } from 'svelte/transition';
	import AnimateOnLoad from '$lib/AnimateOnLoad.svelte';
</script>

<div class="hidden md:block h-full w-full mx-auto">
	<div class="h-1/2 min-w-[50%] flex justify-center items-center">
		<div class="hidden md:block">
			<NamePresentation />
		</div>
	</div>
	<AnimateOnLoad>
		<div class="w-full">
			<div class="w-1/2 flex justify-center mx-auto space-x-5">
				<div in:fly={{ delay: 3000, y: 100, duration: 2000 }} class="text-center">
					<SkillTitle text="Software Engineer" />
				</div>
				<div in:fly={{ delay: 4000, y: 100, duration: 2000 }} class="text-center">
					<SkillTitle text="Machine Learning Engineer" />
				</div>
				<div in:fly={{ delay: 5000, y: 100, duration: 2000 }} class="text-center">
					<SkillTitle text="Enthusiastic Learner" />
				</div>
			</div>
		</div>
		<div in:fade={{ delay: 6500, duration: 500 }} class="w-full">
			<div class="flex justify-center mx-auto">
				<img class="w-96" src="gifs/coder-transparent.gif" alt="coder" />
				<!-- <img class="w-96" src="gifs/neural-network-transparent.gif" alt="coder" /> -->
			</div>
		</div>
	</AnimateOnLoad>
</div>

<div class="md:hidden h-full w-full mx-auto">
	<div class="h-1/3 min-w-[50%] flex justify-center items-center">
		<NamePresentation lg={false} />
	</div>
	<AnimateOnLoad>
		<div class="w-full text-center -mt-5">
			<div class="mx-auto space-y-3">
				<div in:fly={{ delay: 3000, x: -100, duration: 2000 }} class="text-center">
					<SkillTitle text="Software Engineer" />
				</div>
				<div in:fly={{ delay: 4000, x: 100, duration: 2000 }} class="text-center">
					<SkillTitle text="Machine Learning Engineer" />
				</div>
				<div in:fly={{ delay: 5000, y: 100, duration: 2000 }} class="text-center">
					<SkillTitle text="Enthusiastic Learner" />
				</div>
			</div>
		</div>
		<div in:fade={{ delay: 6500, duration: 500 }} class="w-full">
			<div class="flex justify-center mx-auto">
				<img class="w-96" src="gifs/coder-transparent.gif" alt="coder" />
				<!-- <img class="w-96" src="gifs/neural-network-transparent.gif" alt="coder" /> -->
			</div>
		</div>
	</AnimateOnLoad>
</div>
