<script>
	import AnimatedLetters from '$lib/AnimatedLetters.svelte';

	let fontSize = 80;
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<!-- <h1>Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code>/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is critical!</li>
			<li><code>/src/app.postcss</code> - minimal css to make the page full screen, may not be relevant for your project</li>
			<li><code>/src/routes/+page.svelte</code> - this page, you can replace the contents</li>
		</ul> -->
		<div class="presentation">
			<AnimatedLetters {fontSize} text="Hi!" />
			<div class="space" style="margin: 15px;" />
			<div class="name">
				<AnimatedLetters {fontSize} text="I'm" delay={2000} />
				<div class="space" style="padding-right: 10px;" />
				<AnimatedLetters {fontSize} text="Gianluca" delay={2500} />
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
