<script lang="ts">
	// Your custom Skeleton theme:
	// import '../theme.postcss';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import SocialIcons from '$lib/SocialIcons.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="place-self-center">
			<Navbar />
		</AppBar>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="footer">
		<AppBar>
			<svelte:fragment slot="lead"><Footer /></svelte:fragment>
			<svelte:fragment slot="trail"><SocialIcons /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
