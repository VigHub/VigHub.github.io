<script lang="ts">
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import Li from './Li.svelte';
	import SocialIcons from '$lib/SocialIcons.svelte';
</script>

<nav
	class="bg-surface-100 dark:bg-surface-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/about">
			<Avatar
				src="/images/Gianlu.jpg"
				width="w-10"
				rounded="rounded-full"
				border="border-2 border-surface-300-600-token hover:!border-primary-500"
				cursor="cursor-pointer"
			/>
		</a>
		<div
			class="items-center justify-between hidden md:flex md:w-auto "
			id="navbar-sticky"
		>
			<ul
				class="flex flex-col p-4 md:p-0 mt-4  font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
			>
				<Li ref="/" displayText="Home" />
				<Li ref="/about" displayText="About" />
				<Li ref="/projects" displayText="Projects" />
				<Li ref="/contacts" displayText="Contact Me!" />
			</ul>
		</div>
		<div class="flex md:order-2">
			<SocialIcons />
			<LightSwitch />
		</div>
	</div>
</nav>
