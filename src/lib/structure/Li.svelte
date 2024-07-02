<script lang="ts">
	export let ref = '/';
	export let displayText = '';
	let color = 'underline underline-offset-[3px] underline-opacity-100 transition duration-300';
	let darkColor = 'text-[#0FBA81]';
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
	$: activeColor = path === ref ? `${color} ` : '';
</script>

<li>
	<a
		href={ref}
		class="block py-2 pl-3 pr-4 rounded md:p-0 text-sm {activeColor}"
		aria-current="page">{displayText}</a
	>
</li>
