<script>
	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<li on:mouseenter={enter} on:mouseleave={leave}>
	<slot {hovering} />
</li>
