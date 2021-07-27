<script>
	import { initEngine } from '$lib/liquidjs';
	import { classnames } from 'tailwindcss-classnames';

	let engine = initEngine();

	let input = 'Your name is {{ name | capitalize }}!';
	let context = {
		name: 'test name'
	};
	let output = '';
	let isError = false;

	const handleOnClick = async () => {
		try {
			if (engine === null) {
				engine = initEngine();

				if (engine === null) {
					throw new Error('Failed to find Liquidjs, please check your internet connection');
				}
			}

			output = await engine.parseAndRender(input, context);
			isError = false;
		} catch (error) {
			console.error(error);
			output = error;
			isError = true;
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
				<button on:click={handleOnClick}>Convert</button>
			</div>
			<textarea class={outputStyle(isError)} bind:value={output} disabled />
		</div>
	</main>
	<footer>
		<p>
			Visit <a href="https://liquidjs.com/filters/overview.html">Liquidjs.com</a> to read more options
		</p>
	</footer>
</div>
