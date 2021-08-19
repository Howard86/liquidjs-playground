<script>
	import ContextInput from '$lib/components/ContextInput.svelte';
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

	const inputStyle = classnames('flex-grow', 'bg-blue-50');
	const outputStyle = (error) =>
		classnames(inputStyle, 'bg-green-50', {
			'text-red-500': error
		});
</script>

<div class="flex flex-col h-full container text-center mx-auto">
	<main>
		<h1 class="p-4">Welcome to Liquidjs Playground</h1>
		<div class="flex my-4">
			<textarea class={inputStyle} rows="6" bind:value={input} />
			<div class="px-4 self-center">
				<button on:click={onUpdateInput}>Convert</button>
			</div>
			<textarea class={outputStyle(inputError)} bind:value={output} disabled />
		</div>
		<ContextInput />
	</main>
	<footer>
		<p>
			Visit <a href="https://liquidjs.com/filters/overview.html">Liquidjs.com</a> to read more options
		</p>
	</footer>
</div>
