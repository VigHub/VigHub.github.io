<script lang="ts">
	// Your custom Skeleton theme:
	// import '../theme.postcss';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import Copyright from '$lib/structure/Copyright.svelte';
	import Navbar from '$lib/structure/Navbar.svelte';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="place-self-center">
			<Navbar />
		</AppBar>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="footer"><Copyright /></svelte:fragment>
</AppShell>
