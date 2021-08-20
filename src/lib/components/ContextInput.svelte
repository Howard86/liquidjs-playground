<script>
	import { context } from '$lib/store';
	import LabelledTextarea from './LabelledTextarea.svelte';

	const DEFAULT_MESSAGE = 'Please enter a valid JSON';
	let displayText = JSON.stringify($context, null, 2);
	let message = DEFAULT_MESSAGE;
	let isError = false;

	const onSaveContext = () => {
		try {
			context.updateContext(JSON.parse(displayText));
			message = 'Saved!';
			isError = false;
		} catch (error) {
			console.error(error);
			message = error.message;
			isError = true;
		}
	};
</script>

<div class="flex flex-col items-center">
	<h2 class="pb-4">Custom variables in JSON</h2>
	<LabelledTextarea id="context" placeholder="Variables" bind:value={displayText} />
	{#if isError}
		<span class="text-red-500">{message}</span>
	{:else if message === DEFAULT_MESSAGE}
		<span class="text-blue-700">{message}</span>
	{:else}
		<span class="text-green-700">{message}</span>
	{/if}
	<button on:click={onSaveContext}>Save</button>
</div>
