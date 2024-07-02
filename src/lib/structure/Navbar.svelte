<script lang="ts">
	import { AppBar, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import Li from './Li.svelte';
	import SocialIcons from '$lib/SocialIcons.svelte';
</script>

<AppBar slotDefault="place-self-center " class="hidden md:block" padding="p-0">
	<nav
		class="fixed w-full border-b dark:border-gray-800 z-20 bg-opacity-70 backdrop-filter backdrop-blur-lg"
	>
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
			<a href="/about">
				<Avatar
					src="/images/Gianlu.jpg"
					width="w-10"
					rounded="rounded-full"
					border="border-2 border-surface-300-600-token dark:hover:!border-primary-500 hover:!border-[#0b7caf]"
					cursor="cursor-pointer"
				/>
			</a>
			<div class="items-center justify-between hidden md:flex md:w-auto" id="navbar-sticky">
				<ul
					class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
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
</AppBar>
