<script lang="ts">
	import TextGenerateEffect from '$lib/TextGenerateEffect/TextGenerateEffect.svelte';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	let textIndex = 0;
</script>

<div class="container h-4/5 mx-auto px-4 flex justify-center items-center">
	<div class="space-y-5">
		{#if textIndex === 0}
			<h2>C to C: from Curiosity to Code</h2>
			<TextGenerateEffect
				textClass=""
				words="Ever since I was a child, I was captivated by the incredible ads I saw on TV—like a road
				suddenly turning vertical or a house transforming into a spaceship. These amazing visuals
				sparked my curiosity, and I always wanted to understand the magic behind them. My
				fascination with math naturally led me to pursue a path in Computer Engineering."
			/>
			<TextGenerateEffect
				textClass=""
				initialDelay={9}
				words="Today, that childhood curiosity has evolved into a passion for software development and
				machine learning. I thrive on solving complex problems and creating innovative solutions.
				From developing intelligent algorithms to building robust applications, I am driven by the
				same wonder and excitement I felt as a kid, now with the skills and knowledge to bring those
				amazing ideas to life."
			/>
		{:else if textIndex === 1}
			<h2>Education</h2>
			<TextGenerateEffect
				words="As I delved deeper into the world of technology, I realized that the real magic wasn't
			just in flashy visuals but in the intelligence behind them. How does a system recognize a 
			face? How can an algorithm predict what I'll type before I even finish my thought? These
			questions pulled me into the fascinating world of Artificial Intelligence."
			/>
			<TextGenerateEffect
				initialDelay={10}
				words="That curiosity led me straight into the world of Computer Engineering, where I could turn my love for problem-solving into something real."
			/>
			<TextGenerateEffect
				initialDelay={13}
				words="I pursued my Bachelor's and Master's degrees in Computer Science and Engineering at 
				the University of Bergamo, diving deep into automation, robotics, and data analysis. My 
				thesis on fault detection using data-driven models opened my eyes to the power of AI in 
				industrial systems. Wanting to push further, I specialized in Data Science and AI for 
				Industrial Systems at the Polytechnic University of Turin, mastering machine learning, 
				predictive modeling, and optimization."
			/>
		{:else if textIndex === 2}
			<h2>Passions</h2>
			<TextGenerateEffect
				words="Now, I spend my time building models that uncover hidden patterns, teaching machines to “think” (or at least fake it convincingly), and solving problems that once seemed like science fiction. Whether it's designing fault detection systems, optimizing machine learning pipelines, or debating whether AI will ever understand sarcasm, my curiosity keeps pushing me forward."
			/>
			<TextGenerateEffect
				initialDelay={10}
				words="But let's be honest—I don't just compete with algorithms. I'm highly competitive by 
				nature, whether it's fine-tuning a machine learning model or chasing a football on the field.
				Football has taught me strategy, teamwork, and the thrill of never backing down from a 
				challenge—qualities that I bring into my work every day. Because whether it's in AI or on the pitch, I play to win."
			/>
		{:else}
			<h2>404</h2>
			<p>Page not found</p>
		{/if}
	</div>
</div>
<div class="mx-auto px-4 flex justify-center items-center">
	<RadioGroup
		display="flex"
		background="bg-[#f5f5f7] dark:bg-black"
		active="dark:bg-[#f9f9fb] dark:text-black bg-black text-white"
	>
		<RadioItem bind:group={textIndex} name="justify" value={0}>Beginning</RadioItem>
		<RadioItem bind:group={textIndex} name="justify" value={1}>Education</RadioItem>
		<RadioItem bind:group={textIndex} name="justify" value={2}>Passions</RadioItem>
	</RadioGroup>
</div>
