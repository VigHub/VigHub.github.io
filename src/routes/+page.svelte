<script>
	import AnimatedLetters from '$lib/AnimatedLetters.svelte';

	let fontSize = 30;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<div class="hidden md:block">
			<div class="presentation">
				<AnimatedLetters fontSize={70} text="Hi!" />
				<div class="space" style="margin: 15px;" />
				<div class="name">
					<AnimatedLetters fontSize={70} text="I'm" delay={2000} />
					<div class="space" style="padding-right: 10px;" />
					<AnimatedLetters fontSize={70} text="Gianluca" delay={2500} />
				</div>
			</div>
		</div>
		<div class="md:hidden">
			<div class="presentation">
				<AnimatedLetters fontSize={30} text="Hi!" />
				<div class="space" style="margin: 15px;" />
				<div class="name">
					<AnimatedLetters fontSize={30} text="I'm" delay={2000} />
					<div class="space" style="padding-right: 10px;" />
					<AnimatedLetters fontSize={30} text="Gianluca" delay={2500} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.presentation {
		margin: 30px;
		display: inline-flex;
	}

	.name {
		display: inline-flex;
	}
</style>
