<script lang="ts">
	import SocialIcons from '$lib/SocialIcons.svelte';
	import {
		AppBar,
		Avatar,
		LightSwitch,
		drawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		// bgDrawer: 'bg-secondary-300 text-white',

		bgBackdrop:
			'bg-gradient-to-tr dark:from-indigo-500/50 dark:via-purple-500/50 dark:to-pink-500/50 ' +
			'from-green-500/50 via-purple-500/50 to-red-500/50',
		width: 'w-[280px]',
		padding: 'p-4',
		rounded: 'rounded-xl',
	};

	const drawerOpen = () => {
		drawerStore.open(drawerSettings);
	};
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class=" flex items-center md:hidden">
			<SocialIcons />
			<a href="/about">
				<Avatar
					src="/images/Gianlu.jpg"
					width="w-10"
					rounded="rounded-full"
					border="border-2 border-surface-300-600-token hover:!border-primary-500"
					cursor="cursor-pointer"
				/>
			</a>
			<div class="ml-3">
				<LightSwitch />
			</div>
		</div>
	</svelte:fragment>
</AppBar>
