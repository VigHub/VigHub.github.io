<script lang="ts">
	export let ref = '/';
	export let displayText = '';
	let color = 'text-[#0b7caf]';
	let darkColor = 'text-[#0FBA81]';
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
	$: activeColor = path === ref ? `${darkColor} ` : '';
</script>

<li>
	<a
		href={ref}
		class="block py-2 pl-3 pr-4 rounded md:p-0 hover:{color} dark:hover:{darkColor} {activeColor}"
		aria-current="page">{displayText}</a
	>
</li>
