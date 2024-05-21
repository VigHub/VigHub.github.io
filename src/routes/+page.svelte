<script lang="ts">
	import NamePresentation from '$lib/NamePresentation.svelte';
	import SkillTitle from '$lib/SkillTitle.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<div class="h-full w-full mx-auto">
	<div class="h-1/2 min-w-[50%] flex justify-center items-center">
		<div class="hidden md:block">
			<NamePresentation />
		</div>
	</div>
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
</div>

<!--<div class="md:hidden">
	 <div class="presentation">
		<AnimatedLetters fontSize={30} text="Hi!" />
		<div class="md:m-4 m-2" />
		<div class="name">
			<AnimatedLetters fontSize={30} text="I am" delay={2000} />
			<div class="space" style="padding-right: 10px;" />
			<AnimatedLetters fontSize={30} text="Gianluca" delay={2500} />
		</div>
	</div> 
</div>-->
