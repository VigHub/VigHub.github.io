<script lang="ts">
	export let ref = '/';
	export let displayText = '';
	import { page } from '$app/stores';
	let color = 'text-primary-800';
	let darkColor = 'text-primary-500';

	$: active = $page.url.pathname == ref ? `${color} dark:${darkColor}` : '';
</script>

<li>
	<a
		href={ref}
		class="block py-2 pl-3 pr-4 rounded md:p-0 hover:{color} dark:hover:{darkColor} {active}"
		aria-current="page">{displayText}</a
	>
</li>
