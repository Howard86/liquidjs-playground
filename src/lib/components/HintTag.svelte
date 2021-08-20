<script>
	import Hoverable from './Hoverable.svelte';

	export let displayText = '';
	export let hoverText = '';
</script>

<Hoverable let:hovering={active}>
	<span
		class="px-2 py-1 flex-none items-center text-xs rounded-md font-semibold text-green-500 bg-green-50 hover:bg-green-500 hover:text-green-50"
	>
		{#if active}
			{hoverText}
		{:else}
			{displayText}
		{/if}
	</span>
</Hoverable>
