<script lang="ts">
	// Your custom Skeleton theme:
	// import '../theme.postcss';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import Copyright from '$lib/structure/Copyright.svelte';
	import LeftNavbar from '$lib/structure/LeftNavbar.svelte';
	import Navbar from '$lib/structure/Navbar.svelte';
	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		LightSwitch,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import SocialIcons from '$lib/SocialIcons.svelte';

	const drawerOpen = () => {
		drawerStore.open();
	};
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="place-self-center" class="hidden md:block">
			<Navbar />
		</AppBar>
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
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="md:hidden"><Drawer><LeftNavbar /></Drawer></div>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="footer"><Copyright /></svelte:fragment>
</AppShell>
