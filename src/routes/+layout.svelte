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
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import NavbarMobile from '$lib/structure/NavbarMobile.svelte';
</script>

<svelte:head>
	<title>VigHub</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
		<NavbarMobile />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="md:hidden"><Drawer><LeftNavbar /></Drawer></div>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="footer"><Copyright /></svelte:fragment>
</AppShell>
