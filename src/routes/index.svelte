<script>
	import ContextInput from '$lib/components/ContextInput.svelte';
	import LabelledTextarea from '$lib/components/LabelledTextarea.svelte';
	import HintTag from '$lib/components/HintTag.svelte';
	import { initEngine } from '$lib/liquidjs';
	import { context } from '$lib/store';
	import { getInput, updateInput } from '$lib/parsed-input';
	import { classnames } from 'tailwindcss-classnames';

	let engine = initEngine();

	let input = getInput();
	let inputError = false;

	let output = '';

	const onUpdateInput = async () => {
		try {
			if (engine === null) {
				const newEngine = initEngine();
				if (newEngine === null) {
					throw new Error('Failed to find Liquidjs, please check your internet connection');
				}
				engine = newEngine;
			}

			output = await engine.parseAndRender(input, $context);
			updateInput(input);
			inputError = false;
		} catch (error) {
			console.error(error);
			output = error;
			inputError = true;
		}
	};
</script>

<div class="flex flex-col h-full container text-center mx-auto">
	<main class="p-8 md:p-12">
		<h1 class="pb-4">Welcome to Liquidjs Playground</h1>
		<div class="flex my-8 flex-col md:flex-row">
			<LabelledTextarea id="syntax" placeholder="Input" bind:value={input} />
			<div class="p-4 self-center">
				<button on:click={onUpdateInput}>Convert</button>
			</div>
			<LabelledTextarea
				id="output"
				placeholder="Render results"
				bind:value={output}
				className={classnames('bg-gray-100', { 'text-red-500': inputError })}
			/>
		</div>
		<ContextInput />
		<ul>
			<HintTag displayText="decimal" hoverText={'{{123456 | decimal }} => 123,456'} />
		</ul>
	</main>
	<footer>
		<p>
			Visit <a href="https://liquidjs.com/filters/overview.html">Liquidjs.com</a> to read more options
		</p>
	</footer>
</div>
