<script lang="ts">
	export let text: string;
</script>

<div class="text-2xl">
	<button
		class="btn py-3 px-10 hover:dark:bg-gray-950 hover:bg-gray-300 hover:bg-opacity-40
		hover:border dark:border-gray-50 border-gray-500 hover:dark:text-white"
		style="font-size: 20px;"
	>
		{text}
	</button>
</div>
