<script lang="ts">
	import AnimatedLetters from '$lib/AnimatedLetters.svelte';
</script>

<div class="presentation">
	<AnimatedLetters fontSize={70} text="Hi!" />
	<div class="space" style="margin: 15px;" />
	<div class="name">
		<AnimatedLetters fontSize={70} text="I 'm" delay={1200} />
		<div class="space" style="padding-right: 10px;" />
		<AnimatedLetters fontSize={70} text="Gianluca" delay={1800} keepCursorOnFinish />
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
