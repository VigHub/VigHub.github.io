<script>
	import { drawerStore } from '@skeletonlabs/skeleton';

	const drawerClose = () => {
		drawerStore.close();
	};
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/about" on:click={drawerClose}>About</a></li>
		<li><a href="/projects" on:click={drawerClose}>Projects</a></li>
		<li><a href="/contacts" on:click={drawerClose}>Contact Me!</a></li>
	</ul>
</nav>
