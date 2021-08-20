<script>
	export let id;
	export let placeholder;
	export let value;
	export let className = '';

	function onType(event) {
		event.currentTarget.style.cssText = `min-height: ${event.currentTarget.scrollHeight}px`;
	}
</script>

<div class="relative w-full appearance-none label-floating">
	<textarea
		{id}
		{placeholder}
		rows="6"
		class={className}
		type="text"
		on:keydown={onType}
		bind:value
	/>
	<label
		for={id}
		class="absolute font-bold tracking-wide py-2 px-3 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text text-indigo-900"
		>{placeholder}
	</label>
</div>

<style>
	.label-floating textarea:not(:placeholder-shown) {
		padding-top: 1.8rem;
	}
	.label-floating textarea:not(:placeholder-shown) ~ label {
		font-size: 0.8rem;
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}
</style>
