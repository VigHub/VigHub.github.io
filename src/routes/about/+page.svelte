<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	let textIndex = 0;
</script>

<div class="container h-4/5 mx-auto px-4 flex justify-center items-center">
	<div class="space-y-5">
		{#if textIndex === 0}
			<h2>C to C: from Curiosity to Code</h2>
			<p>
				Ever since I was a child, I was captivated by the incredible ads I saw on TV—like a road
				suddenly turning vertical or a house transforming into a spaceship. These amazing visuals
				sparked my curiosity, and I always wanted to understand the magic behind them. My
				fascination with math naturally led me to pursue a path in Computer Engineering.
			</p>
			<p>
				Today, that childhood curiosity has evolved into a passion for software development and
				machine learning. I thrive on solving complex problems and creating innovative solutions.
				From developing intelligent algorithms to building robust applications, I am driven by the
				same wonder and excitement I felt as a kid, now with the skills and knowledge to bring those
				amazing ideas to life.
			</p>
		{:else if textIndex === 1}
			<h2>Education</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia maxime fugiat, rerum
				quam maiores magni harum minima eius voluptas, minus sint quos, culpa officia iusto sapiente
				doloribus earum velit.
			</p>
		{:else if textIndex === 2}
			<h2>Passions</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia maxime fugiat, rerum
				quam maiores magni harum minima eius voluptas, minus sint quos, culpa officia iusto sapiente
				doloribus earum velit.
			</p>
		{:else}
			<h2>404</h2>
			<p>Page not found</p>
		{/if}
	</div>
</div>
<div class="mx-auto px-4 flex justify-center items-center">
	<RadioGroup display="flex">
		<RadioItem bind:group={textIndex} name="justify" value={0}>Beginning</RadioItem>
		<RadioItem bind:group={textIndex} name="justify" value={1}>Education</RadioItem>
		<RadioItem bind:group={textIndex} name="justify" value={2}>Passions</RadioItem>
	</RadioGroup>
</div>
