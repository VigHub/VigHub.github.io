<script lang="ts">
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';

	const drawerClose = () => {
		drawerStore.close();
	};
	const styleClass = 'ms-1 mt-2  p-3 rounded-3xl hover:bg-[#f1f5f9] dark:hover:bg-[#334155]';
	const aStyle = '!no-underline !text-black dark:!text-white';
	$: classesActive = (href: string) =>
		href === $page.url.pathname
			? 'bg-[#f1f5f9] dark:bg-[#334155] border-sky-700 dark:border-emerald-500 border-x-2'
			: '';
</script>

<nav class="p-4">
	<ul class="">
		<a href="/" on:click={drawerClose} class={aStyle}>
			<li class="{classesActive('/')} {styleClass}">Home</li>
		</a>
		<a href="/about" on:click={drawerClose} class={aStyle}>
			<li class="{classesActive('/about')} {styleClass}">About</li>
		</a>
		<a href="/projects" on:click={drawerClose} class={aStyle}>
			<li class="{classesActive('/projects')} {styleClass}">Projects</li>
		</a>
		<a href="/contacts" on:click={drawerClose} class={aStyle}>
			<li class="{classesActive('/contacts')} {styleClass}">Contact Me!</li>
		</a>
	</ul>
</nav>
