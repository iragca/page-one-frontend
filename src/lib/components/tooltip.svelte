<!--
Wrap a component with this tooltip component to add a tooltip.  
This component creates a tooltip that appears when the user hovers over an element.
The tooltip displays the text passed to it via the `title` prop.
The tooltip follows the mouse cursor and disappears when the mouse leaves the element. -->

<script>
	export let title = '';
	let isHovered = false;
	let x;
	let y;
	
	function mouseOver(event) {
		isHovered = true;
		x = event.pageX + 20;
		y = event.pageY + 20;
	}
	function mouseMove(event) {
		x = event.pageX + 20;
		y = event.pageY + 20;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div
	on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
	.tooltip {
		background: var(--dark-black);
		border-radius: 4px;
		padding: 4px;
		position: absolute;
	}
</style>